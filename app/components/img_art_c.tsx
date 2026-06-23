import Image from "next/image";
import coffePourImg from '../../public/images/under-img.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import checkImage from '../../public/images/check.png'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featureLists, goodLists } from "./dataArraysExported";
import Two_arrays_display from "./twoarrays_display";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)
export default function Img_art_c() {
  const ref = useRef(null)
  useGSAP(() => {





    gsap.timeline({
      scrollTrigger: {
        trigger: '#art_abs',
        start: 'top top',
        pin: true,
        scrub: true,
        end: '+=200%',



      }
    })

      .fromTo('#text_the_art', { x: '100vw', }, { x: 0 })
      .fromTo('#img_containerrr', { x: '100vw', }, { x: 0 })
      .to('#left_goods', { x: '-100vw', opacity: 0 })
      .to('#right_goods', { x: '100vw' })


      .to('#mask_img', { maskSize: '400%', })
      .to('.divbox h4', { opacity: 1, })
      .to('.divbox p', { opacity: 1 })
      .to('#art_abs', { x: '100vw', duration: 4 })






  }, { scope: ref })
  return (
    <div ref={ref} className={`  bg-ambder-400 `}>

      <div id={'art_abs'} className={`relative  h-screen w-full`}>
        <Two_arrays_display></Two_arrays_display>

        {/* img and then after it some text */}
        <div id={`img_containerrr`} className={`absolute  z-2 px-5 flex justify-center items-center flex-col inset-0 h-screen w-full`}>
          <Image id={'mask_img'} width={400} height={400} className={`h-80 rounded-2xl shadow-2xl   max-w-180 object-cover w-full `} alt={'pour coffe'} src={coffePourImg} />
          <div className={`divbox flex flex-col gap-5 py-5`}>
            <h4 className={`opacity-0 text-3xl`}>
              Made with Craft, Poured with Passion

            </h4>
            <p className={`opacity-0`}>
              This isn't just a drink. It's a carefully crafted moment made just for you.

            </p>
          </div>
        </div>


        <div className={`absolute z-1 inset-0 flex justify-center items-center `}>
          <h2 id={'text_the_art'} style={{ zoom: 1.7 }} className={`capitalize max-sm:text-3xl -translate-y-20 text-gray-500 opacity-70 tracking-widest text-7xl font-DM_Serif_Text_Font`}>the art</h2>
        </div>






      </div>

    </div >
  )
}