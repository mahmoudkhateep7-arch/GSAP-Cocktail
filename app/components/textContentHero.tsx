"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import LeftTextInHero from "./leftTextInHero"
import RightTextInHero from "./rightTextInHero"
import CenterTextInHero from "./centerTextInHero"
export default function TextConteHero() {
  useGSAP(() => {
    gsap.timeline().
      fromTo(`#word_container_id span`, {
        y: 140,
        opacity: 0

      }, {
        y: 0,
        duration: .8,
        stagger: .1,
        delay: 1,
        opacity: 1,



      })

      .fromTo(`#p_id`, {
        y: 140,
        opacity: 0

      }, {
        y: 0,
        duration: .8, opacity: 1
      })
      .fromTo(`#sp_id`, {
        y: 140,
        opacity: 0

      }, {
        y: 0,
        duration: .8, opacity: 1
      },
        '<'
      )


  }, [])

  return (
    <div className={`absolute z-10 h-full px-2 w-full `}>
      <div className={`max-w-7xl h-screen  flex flex-col justify-center   mx-auto`}>
        <div className={`flex flex-col max-[500px]:gap-20   gap-40 `}>
          <CenterTextInHero></CenterTextInHero>
          <div className=" flex max-[500px]:flex-col  max-[500px]:gap-10 max-[500px]:items-center  justify-between">
            <LeftTextInHero></LeftTextInHero>

            <RightTextInHero></RightTextInHero>
          </div>
        </div>
      </div>
    </div>
  )
}