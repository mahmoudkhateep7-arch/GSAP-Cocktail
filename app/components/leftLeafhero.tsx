"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function LeftLeafHero() {
  useGSAP(() => {
    gsap.to('#left_leaf_bg', {
      scrollTrigger: {
        trigger: '#left_leaf_bg_parent',
        start: 'top top',
        scrub: true



      },
      duration: .1,
      y: -2000
    })
  }, [])
  return (
    <div id={'left_leaf_bg_parent'} className={`absolute  max-[500px]:opacity-0 top-0 z-10 h-full w-full overflow-hidden`}>
      <div id={`left_leaf_bg`} className={`relative top-15 bg-ambenr-400 h-full w-full  `}></div>
    </div>
  )
}