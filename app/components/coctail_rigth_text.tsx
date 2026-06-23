"use client"
import gsap from "gsap"
import { mockTailLists } from "./dataArraysExported"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

export default function Coctail_Right_Text_C() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#parnt_left_right',
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    })
      .fromTo('#right_item_id', { x: 300 }, { x: 0, duration: .4 })
      .fromTo('#item_of_Array_id', { x: '100vw' }, { x: 0, duration: .4, stagger: .1 })

  }, [])
  return (
    <div className={` `}>
      <h3 id={`right_item_id`} className={`text-xl font-Mona_Sans_Font pb-10`}>Most loved mocktails:</h3>
      <div className={`flex flex-col gap-8`}>
        {mockTailLists.map(({ country, detail, name, price }) => {
          return (
            <div id={`item_of_Array_id`} className={`flex flex-col `} key={name}>
              <div className={`flex gap-25 justify-between`}>
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