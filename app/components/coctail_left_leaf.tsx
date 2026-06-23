"use client"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Coctail_Left_Leaf_C() {
  useGSAP(() => {
    gsap.to('#coctail_left_image_id', {
      scrollTrigger: {
        trigger: '#coctail_left_image_id',
        start: 'top+=20% top',
        scrub: true,
      },
      y: 200, opacity: 0
    })
  }, [])
  return (
    <div className={`absolute inset-0 top-0 h-screen w-full  z-1 `}>
      <div id={`coctail_left_image_id`} className={`relative    h-full w-full `}></div>

    </div>
  )
}