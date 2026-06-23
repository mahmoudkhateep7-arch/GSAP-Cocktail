import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import { Fragment, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Image_Card_C({ col_span_or_hidden, idx, imgUrl }: {
  imgUrl: StaticImageData,
  idx: number,
  col_span_or_hidden: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const onHover = () => {
    if (ref.current) {
      gsap.to(ref.current, {
        y: -20

      })
    }

  }
  const onHoverEnd = () => {
    if (ref.current) {
      gsap.to(ref.current, {
        y: 0

      })
    }

  }
  useGSAP(() => {
    gsap.fromTo(`.box`, { opacity: 0, y: 1000 },
      {

        y: 0, opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top+=10% bottom',
          toggleActions: 'play none none reverse'
        },
        duration: .8
      })
  }, { scope: ref })
  return (

    <div ref={ref} className={`  ${col_span_or_hidden}`}>
      <div onMouseLeave={onHoverEnd} onMouseEnter={onHover} className={`  h-70 box rounded-2xl overflow-hidden hidden sm:block  `} >
        <Image alt={`${idx}`} className={`w-full box h-full object-cover`} src={imgUrl} width={300} height={300} />
      </div>

      <div
        className={` h-70 box rounded-2xl box overflow-hidden block sm:hidden   `} >
        <Image alt={`${idx}`} className={`w-full  h-full object-cover`} src={imgUrl} width={300} height={300} />
      </div>
    </div>
  )
}