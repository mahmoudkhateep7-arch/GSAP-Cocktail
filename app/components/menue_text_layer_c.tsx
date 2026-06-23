import { allCocktails } from "./dataArraysExported"

export default function Menu_text_Layer_c() {
  return (
    <div className={`relative z-40`}>
      {/* top */}
      <div className={`grid grid-cols-4 gap-20 px-30 text-xl`}>
        {allCocktails.map(({ description, id, image, name, title }) => {
          return (
            <a

              className={`border-b-2 border-white flex justify-center pb-3`}
              href={'#'} key={id}>
              {name}
            </a>

          )
        })}
      </div>
    </div>
  )
}