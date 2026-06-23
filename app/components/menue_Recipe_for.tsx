import { allCocktails } from "./dataArraysExported";

export default function MenueRecipeFor({ activeIndex }: { activeIndex: number }) {
  return (
    <div className={`max-[900px]:justify-center max-[900px]:flex max-[900px]:flex-col`}>
      <span className={`text-xl capitalize tracking-wide`}>recipe for:</span>
      <h4 className={`text-yellow-300 flex  flex-col gap-0 text-5xl pt-5 font-DM_Serif_Text_Font`}>
        <span>
          {allCocktails[activeIndex].name.split(' ')[0]}

        </span>
        <span>
          {allCocktails[activeIndex].name.split(' ')[1]}

        </span>
      </h4>
    </div>
  )
}