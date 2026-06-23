"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function RightHeroLeaf() {
  useGSAP(() => {
    gsap.to('#right_leaf_bg', {
      scrollTrigger: {
        trigger: '#right_leaf_b_parent',
        scrub: true,
        start: 'top top',

      },
      duration: 2,
      y: 2000,
      bac: 'red'
    })
  }, [])
  return (
    <div id={`right_leaf_b_parent`} className={`absolute top-0 z-10 h-full w-full overflow-hidden`}>
      <div id={`right_leaf_bg`} className={`relative h-full w-full  `}></div>
    </div>
  )
}