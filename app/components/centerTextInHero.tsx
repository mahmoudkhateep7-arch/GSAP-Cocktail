"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function CenterTextInHero() {
  useGSAP(() => {
    gsap.to('#word_container_id', {
      scrollTrigger: {
        trigger: '#word_container_id',
        start: 'top 10px',
        scrub: true
      },
      y: 3000, opacity: 0,
      x: 1000
    })
  }, [])
  return (
    <div id={'word_container_id'} className={`text-center max-sm:text-4xl  flex gap-2 justify-center text-[92px] capitalize font-DM_Serif_Text_Font`}>
      {/* mohito */}
      {`mohito`.split('').map((l, idx) => {
        return (
          <span style={{ zoom: 1.5 }} className={`opacity-0`} key={idx}>

            {l}
          </span>
        )
      })}
    </div>
  )
}