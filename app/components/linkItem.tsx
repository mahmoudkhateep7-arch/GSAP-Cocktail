

import { useRef } from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export default function LinkItemC({ id, title }: { id: string, title: string }) {
  const aref = useRef<HTMLAnchorElement>(null)
  const refTimeLine = useRef<null | gsap.core.Timeline>(null)
  useGSAP(() => {
    const tl =
      gsap.timeline({ paused: true })
        .fromTo(`.${id} .div-1`, { width: 0, top: 0, left: 0, height: 2, }, { duration: .1, width: '100%', background: 'red' })
        .fromTo(`.${id} .div-2`, { height: 0, zIndex: 100, width: 1, right: 0, top: 0, }, { duration: .1, background: 'white', height: '100%' })
        .fromTo(`.${id} .div-3`, { height: 1, width: 0, bottom: 0, right: 0 }, { duration: .1, background: '#16e189', width: '100%' })
        .fromTo(`.${id} .div-4`, { zIndex: 2, left: 0, bottom: 0, width: 2, height: 0 }, { duration: .1, height: '100%', background: 'gray' })
    refTimeLine.current = tl
  }, { scope: aref })
  const onHover = () => {
    if (refTimeLine.current) {
      refTimeLine.current.play()
    }
  }
  const onLeave = () => {
    if (refTimeLine.current) {
      refTimeLine.current.reverse()
    }

  }
  return (
    <a ref={aref}
      onMouseLeave={onLeave}
      onMouseEnter={onHover} className={`relative z-10    p-3  ${id}`} href={`#${id}`}>

      <span>{title}</span>
      {[1, 2, 3, 4].map((n) => {
        return (
          <div key={n} className={`absolute   div-${n}`}></div>
        )
      })}

    </a>
  )
}