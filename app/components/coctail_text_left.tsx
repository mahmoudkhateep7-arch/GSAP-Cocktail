"use client"
import gsap from "gsap"
import { cocktailLists } from "./dataArraysExported"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

export default function Coctail_Text_Left_C() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#parnt_left_right',
        start: 'top center',
        toggleActions: 'play none none reverse '

      }
    })
      .fromTo('#left_title', { x: '-100vw' }, { x: 0, duration: .5, })
      .fromTo('#one_item', { x: '-100vw' }, { x: 0, duration: .4, stagger: .1 })

  }, [])
  return (
    <div className={` `}>
      <h3 id={`left_title`} className={`text-xl  font-Mona_Sans_Font pb-10`}>Most popular cocktails:</h3>
      <div className={`flex flex-col gap-8`}>
        {cocktailLists.map(({ country, detail, name, price }) => {
          return (
            <div id={'one_item'} className={`flex flex-col `} key={name}>
              <div className={`flex gap-25 max-sm:gap-5 justify-between`}>
                <h4 className={`text-yellow-400 font-DM_Serif_Text_Font`}>{name}</h4>
                <span className={`text-xl font-Mona_Sans_Font`}>- {price}</span>
              </div>
              <div>
                {country}| {detail}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}