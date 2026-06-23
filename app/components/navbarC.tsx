"use client"

import LeftNavC from "./leftNavC"
import RightNaveDesktopC from "./rightNavDesktopC"
import RignNavMobileC from "./rightNavMobile"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all"
import { SetStateAction, useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
export default function NavbarC({ setNavHieght }: { setNavHieght: React.Dispatch<SetStateAction<number>> }) {
  const navRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const resizer = new ResizeObserver((entries) => {

      const en1 = entries[0]
      const height = en1.target.getBoundingClientRect().height
      setNavHieght(height)

    })
    if (navRef.current) {
      resizer.observe(navRef.current)
    }
  }, [])
  useGSAP(() => {
    const idName = `#sticky_nav`
    gsap.to(idName,
      {
        scrollTrigger: {
          trigger: idName,
          start: 'top+=3 top',
          onEnter: () => {
            gsap.to(idName, {
              duration: .2,
              backdropFilter: 'blur(4px)'


            })
          },

          onLeaveBack: () => {
            gsap.to(idName, { background: 'transparent', duration: .3 })
          },



        }

      })
  }, [])

  return (
    <div ref={navRef} id={`sticky_nav`} className="px-4  sticky z-1000 top-0   py-3">
      <div className="max-w-7xl   mx-auto">
        <div className={`flex flex-col sm:flex-row justify-between items-center`}>

          <LeftNavC></LeftNavC>

          <RightNaveDesktopC></RightNaveDesktopC>

          <RignNavMobileC></RignNavMobileC>


        </div>

      </div>
    </div>
  )
}
