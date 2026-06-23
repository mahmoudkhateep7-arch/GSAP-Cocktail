"use client"
import gsap from "gsap"
import { allCocktails } from "./dataArraysExported"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import Top_Text_Menu_C from "./toptextInMenuC"
import Image from "next/image"
import MenueRecipeFor from "./menue_Recipe_for"
import Menu_Description from "./menu_description"
import Menu_Left_righ from "./menu_left_right"
export default function Menu_text_Layer_c() {
  const [activeIndex, setActiveIndex] = useState(0)
  useGSAP(() => {

    gsap.fromTo(`.box${activeIndex}`, { borderBottomColor: '#a5a0a0', color: '#a5a0a0' }
      , { color: '#fff', duration: .1, borderBottomColor: '#fff' })
  }, [])
  const handleClick = (id: number) => {
    if (activeIndex != id) {

      gsap.fromTo(`.box${id}`, { borderBottomColor: '#a5a0a0', color: '#a5a0a0' }
        , { color: '#fff', duration: .9, borderBottomColor: '#fff' })

      gsap.fromTo(`.box${activeIndex}`
        , { color: '#fff', duration: .9, borderBottomColor: '#fff' }


        ,
        { borderBottomColor: '#a5a0a0', color: '#a5a0a0', onComplete: () => { setActiveIndex(id) } }
      )


    }

  }
  const oldLeftNewRight = () => {
    gsap.to('#divToBeMoved', {
      x: '100vw', duration: .3, onComplete: () => {
        setDiection('right')

        handleClick(indexBefore)

      }
    })
  }
  const oldRightNewLeft = () => {
    gsap.to('#divToBeMoved', {
      x: '-100vw', duration: .3, onComplete: () => {
        setDiection('left')
        handleClick(nextIndex)


      }
    })


  }
  const indexBefore = activeIndex - 1 == -1 ? 3 : activeIndex - 1
  const [direction, setDiection] = useState<'none' | 'left' | 'right'>('none')
  const nextIndex = activeIndex + 1 == 4 ? 0 : activeIndex + 1
  useEffect(() => {

    if (direction == 'none') {
      gsap.fromTo('#divToBeMoved', { opacity: 0, }, { opacity: 1, duration: 0 })
    }

    if (direction == 'left') {
      gsap.fromTo('#divToBeMoved', { opacity: 0, x: '100vw' }, { opacity: 1, x: 0 })
    }
    if (direction == 'right') {
      gsap.fromTo('#divToBeMoved', { opacity: 0, x: '-100vw' }, { opacity: 1, x: 0 })
    }
    gsap.fromTo('.upandopacity', { opacity: 0, y: 100 }, { y: 0, opacity: 1, duration: 1, delay: .3 })
  }, [activeIndex])
  return (
    <div className={`relative z-40`}>
      {/* top */}
      <Top_Text_Menu_C handleClick={handleClick}></Top_Text_Menu_C>

      {/* flex with justify between */}

      <Menu_Left_righ indexBefore={indexBefore}
        nextIndex={nextIndex}
        oldLeftNewRight={oldLeftNewRight}
        oldRightNewLeft={oldRightNewLeft}
      ></Menu_Left_righ>

      <div id={`divToBeMoved`} className={`min-[900px]:flex grid-cols-1 opacity-0 px-3 grid sm:grid-cols-2 max-[900px]:translate-y-5 gap-5 -translate-y-15 min-[900px]:justify-between min-[900px]:items-end`}>
        {/*  */}
        <MenueRecipeFor activeIndex={activeIndex}></MenueRecipeFor>

        <div className={``}>
          <Image alt={allCocktails[activeIndex].title} src={allCocktails[activeIndex].image} width={400} height={400} className={`w-100 h-100 object-cover`} />
        </div>


        <Menu_Description activeIndex={activeIndex}></Menu_Description>


      </div>

    </div>
  )
}