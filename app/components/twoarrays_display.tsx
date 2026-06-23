import Image from "next/image"
import { featureLists, goodLists } from "./dataArraysExported"
import checkImage from '../../public/images/check.png'

export default function Two_arrays_display() {
  return (
    <div className={`absolute z-30 inset-0 px-3 h-screen w-full`}>
      <div className={`max-w-7xl max-sm:flex max-sm:justify-center max-sm:items-center h-screen mx-auto`}>
        <div className={`flex sm:h-screen sm:items-end max-sm:flex-col max-sm:gap-4  max-sm:justify-center py-20 sm:justify-between gap-10`}>

          <div id={`left_goods`} className={`flex flex-col gap-4`}>
            {goodLists.map((str) => {
              return (
                <div className={`flex gap-3 items-center`} key={str}>
                  <Image className={`h-5 w-5 object-cover`} alt={'check'} src={checkImage} />
                  <span>{str}</span>
                </div>
              )
            })}
          </div>

          <div id={`right_goods`} className={`flex   flex-col gap-4`}>
            {featureLists.map((str) => {
              return (


                <div className={`flex gap-3 items-center`} key={str}>
                  <Image className={`h-5 w-5 object-cover`} alt={'check'} src={checkImage} />
                  <span>{str}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}