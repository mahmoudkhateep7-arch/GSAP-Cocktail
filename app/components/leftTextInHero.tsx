"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function LeftTextInHero() {
  useGSAP(() => {
    gsap.to('#left_top_20_percent_id', {
      scrollTrigger: {
        scrub: true,
        start: 'top 10%',
        trigger: '#left_top_20_percent_id'

      },
      x: -2000,


    })

  }, [])
  return (
    <div id={`left_top_20_percent_id`} className="flex text-center gap-6 flex-col">
      <p>Cool. Crisp. Classic.</p>
      <p id={`p_id`} className="flex max-[500px]:flex-row max-sm:text-3xl flex-col gap-3 text-5xl font-semibold font-DM_Serif_Text_Font text-yellow-400">
        <span>Sip the Spirit </span>
        <span>of Summer</span>
      </p>
    </div>
  )
}