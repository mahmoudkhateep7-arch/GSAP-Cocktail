"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function RightTextInHero() {
  useGSAP(() => {
    gsap.to('#RightTextInHero_id', {
      scrollTrigger: {
        trigger: '#RightTextInHero_id',
        scrub: true,
        start: 'top 10%'
      },
      x: 2000
    })
  }, [])
  return (
    <div id={`RightTextInHero_id`} className="flex flex-col gap-6">
      <p id={`sp_id`} className="w-64 max-[500px]:w-80">
        Every cocktail on our menu is a blend of premium ingredients,
        creative flair, and timeless recipes — designed to delight your
        senses.
      </p>
      <a className={`text-2xl`} href="#cocktails">View cocktails</a>
    </div>
  )
}