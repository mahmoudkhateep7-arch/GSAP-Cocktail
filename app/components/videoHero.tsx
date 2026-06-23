"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function VideoHero() {
  const videoRef = useRef<null | HTMLVideoElement>(null)

  useGSAP(() => {
    if (videoRef.current) {
      const video = videoRef.current
      video.pause()
      video.currentTime = 0
      gsap.to(video, {
        currentTime: video.duration,


        scrollTrigger: {
          trigger: '#con',
          start: 'top-=10% top',
          // pin: true,
          scrub: true
        },

      })

    }


  }, [])
  return (
    <div id={`con`} className={`absolute  max-sm:hidden  w-full flex flex-col justify-end h-full`}>
      {/* video */}

      <video playsInline={true} ref={videoRef} className={`block      h-140`} muted={true} src={'/videos/output.mp4'}></video>

    </div>
  )
}