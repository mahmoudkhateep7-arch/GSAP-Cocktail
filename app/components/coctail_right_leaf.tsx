"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function Coctail_Right_Leaf_C() {
  useGSAP(() => {
    gsap.to('#coctail_right_image_id', {
      scrollTrigger: {
        trigger: '#coctail_right_image_id_parent',
        scrub: true,
        start: 'top+=20% top '

      },
      y: -1000
    })
  }, [])
  return (
    <div id={`coctail_right_image_id_parent`} className={`absolute  inset-0 top-0 h-screen w-full  z-1 `}>
      <div id={`coctail_right_image_id`} className={`relative translate-y-15  translate-x-15 h-full w-full `}></div>

    </div>

  )
}