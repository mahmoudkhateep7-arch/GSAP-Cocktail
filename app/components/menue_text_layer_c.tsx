import gsap from "gsap"
import { allCocktails } from "./dataArraysExported"
import { useState } from "react"
import { useGSAP } from "@gsap/react"
import Top_Text_Menu_C from "./toptextInMenuC"

export default function Menu_text_Layer_c() {
  const [activId, setActiId] = useState(1)
  useGSAP(() => {

    gsap.fromTo('.box1', { borderBottomColor: '#a5a0a0', color: '#a5a0a0' }
      , { color: '#fff', duration: .9, borderBottomColor: '#fff' })
  }, [])
  const handleClick = (id: number) => {
    if (activId != id) {

      gsap.fromTo(`.box${id}`, { borderBottomColor: '#a5a0a0', color: '#a5a0a0' }
        , { color: '#fff', duration: .9, borderBottomColor: '#fff' })

      gsap.fromTo(`.box${activId}`
        , { color: '#fff', duration: .9, borderBottomColor: '#fff' }


        ,
        { borderBottomColor: '#a5a0a0', color: '#a5a0a0', onComplete: () => { setActiId(id) } }
      )


    }

  }

  return (
    <div className={`relative z-40`}>
      {/* top */}
      <Top_Text_Menu_C handleClick={handleClick}></Top_Text_Menu_C>

      {/* flex with justify between */}
      <div className={`flex justify-between gap-10`}>
        <a href="#" className={`flex flex-col gap-2`}>
          <h4>
            {allCocktails[(activId - 2) == -1 ? 3 : activId - 2].name}
          </h4>
        </a>

        <a href="#" className={`flex flex-col gap-2`}>
          <h4>
            {allCocktails[(activId % 4)].name}
          </h4>
        </a>
      </div>

    </div>
  )
}