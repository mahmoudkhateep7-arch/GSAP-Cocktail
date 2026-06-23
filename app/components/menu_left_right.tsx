import Image from "next/image";
import { allCocktails } from "./dataArraysExported";
import leftArrow from '../../public/images/right-arrow.png'

export default function Menu_Left_righ({ oldLeftNewRight, indexBefore, oldRightNewLeft, nextIndex }: {
  oldLeftNewRight: () => void,
  oldRightNewLeft: () => void,
  indexBefore: number
  nextIndex: number


}) {
  return (
    <div className={`flex relative z-10 px-3  pt-30 justify-between gap-10`}>
      <div onClick={oldLeftNewRight} className={`flex cursor-pointer flex-col gap-2`}>
        <h4 className={`text-2xl max-[550px]:text-[18px] max-[450px]:text-sm font-DM_Serif_Text_Font tracking-widest`}>
          {allCocktails[indexBefore].name}
        </h4>
        <div >
          <Image alt={'left arrow'} src={leftArrow} width={40} height={40} className={`w-10 h-auto`} />
        </div>

      </div>

      <div onClick={oldRightNewLeft} className={`flex cursor-pointer flex-col gap-2`}>
        <h4 className={`text-2xl max-[450px]:text-sm max-[550px]:text-[18px] tracking-widest font-DM_Serif_Text_Font`}>
          {allCocktails[nextIndex].name}
        </h4>
        <div className={`rotate-180`}>
          <Image alt={'left arrow'} src={leftArrow} width={40} height={40} className={`w-10  h-auto`} />
        </div>
      </div>
    </div>
  )
}