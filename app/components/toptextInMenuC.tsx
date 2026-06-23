import { allCocktails } from "./dataArraysExported"

export default function Top_Text_Menu_C({ handleClick }: { handleClick: (id: number) => void }) {
  return (
    <div className={`grid lg:grid-cols-4 relative z-10  gap-20 md:px-4 max-[700px]:hidden grid-cols-2 md:gap-8 lg:px-30 text-xl`}>
      {allCocktails.map(({ description, id, image, name, title }) => {
        return (
          <div
            onClick={() => { handleClick(id) }}

            className={`border-b-2 cursor-pointer box${id} border-[#a5a0a0] text-[#a5a0a0] flex justify-center pb-3`}
            key={id}>
            {name}
          </div>

        )
      })}
    </div>
  )
}