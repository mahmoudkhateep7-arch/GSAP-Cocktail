import Image from "next/image"
import { socials } from "./dataArraysExported"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function Contect_c({ navHieght }: { navHieght: number }) {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#parent_with_staggre',
        start: 'top bottom',
        toggleActions: 'play none none reverse'
      }
    })
      .fromTo('#parent_with_staggre > *', { opacity: 0, }, { opacity: 1, stagger: .2 })
  }, [])
  return (
    <section id={`contact`} style={{ scrollMarginTop: navHieght }} className={`py-10  overflow-hidden relative  px-2`}>
      <div id={`parent_with_staggre`} className={`flex relative z-4 flex-col items-center text-center`}>
        <h3 className={`text-4xl font-Modern_Negra_Font`}>Where to Find Us</h3>
        <span className={`text-sm pt-5 pb-2`}>Visit Our Bar</span>
        <span className={`text-xl`}>456, Raq Blvd. #404, Los Angeles, CA 90210</span>
        <span className={`text-sm pt-5 pb-3`}>Contact Us</span>
        <span className={`text-xl`}>(555) 987-6543</span>
        <span className={`text-xl`}>hello@jsmcocktail.com</span>
        <span className={`text-sm pt-5 pb-3`}>Open Every Day</span>
        <span className={`text-xl`}>Mon–Thu : 11:00am – 12am</span>
        <span className={`text-xl`}>Fri : 11:00am – 2am</span>
        <span className={`text-xl`}>Sat : 9:00am – 2am</span>
        <span className={`text-xl`}>Sun : 9:00am – 1am</span>
        <span className={`text-sm pt-5 pb-3`}>Socials</span>
        <div className={`flex gap-3`}>
          {socials.map(({ icon, name, url }) => {
            return (
              <Image className={`w-7.5 h-7.5`} key={name} alt={name} src={icon} width={30} height={30} />
            )
          })}

        </div>
      </div>


      {/* left contact leaft */}
      <div className={`absolute inset-0 `}>
        <div id={`contect_left_leaf`} className={`relative h-full top-15`}></div>
      </div>


      <div className={`absolute inset-0`}>
        <div id={`contect_right_leaf`} className={`relative max-sm:-right-25 -top-10 h-full`}></div>
      </div>

    </section>
  )
}