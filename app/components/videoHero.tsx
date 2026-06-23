"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function VideoHero() {
  const videoRef = useRef<null | HTMLVideoElement>(null)

  useGSAP(() => {

    if (videoRef.current == null) { return }
    let tl: gsap.core.Timeline | null = null
    const video = videoRef.current
    const duntionToBeCalledWhenVideoLoad = () => {
      video.pause()
      video.currentTime = 0

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#con',
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true
        }
      })
        .to(videoRef.current, {
          currentTime: video.duration,
          duration: 5,
          ease: 'none'

        })
        .to(video, { x: '100vw', duration: 2 })

    }
    if (video.readyState >= 1) {
      duntionToBeCalledWhenVideoLoad()

    } else {
      video.addEventListener('loadedmetadata', duntionToBeCalledWhenVideoLoad)
    }
    return () => {
      video.removeEventListener('loadedmetadata', duntionToBeCalledWhenVideoLoad)
      if (tl) {
        tl.kill()
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill()
        }
      }
    }


  }, [])
  return (
    <div id={`con`} className={`absolute  max-sm:hidden  w-full flex flex-col justify-end h-full`}>
      {/* video */}

      <video preload="auto" playsInline={true} ref={videoRef} className={`block      h-140`} muted={true} src={'/videos/output.mp4'}></video>

    </div>
  )
}