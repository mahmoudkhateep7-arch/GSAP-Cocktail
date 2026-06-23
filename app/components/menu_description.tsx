import { allCocktails } from "./dataArraysExported";

export default function Menu_Description({ activeIndex }: { activeIndex: number }) {
  return (
    <div className={`upandopacity sm:col-span-2  max-[900px]:pt-4`}>
      <div className={`flex w-100 max-[900px]:w-full flex-col text-5xl font-Modern_Negra_Font pb-5`}>
        {allCocktails[activeIndex].title}
      </div>
      <p className={`w-100 text-[18px] max-[900px]:w-full`}>
        {allCocktails[activeIndex].description}



      </p>
    </div>
  )
}