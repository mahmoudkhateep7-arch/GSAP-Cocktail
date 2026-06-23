import Image from "next/image";
import Img_art_c from "./img_art_c";
import { featureLists, goodLists } from "./dataArraysExported";
export default function Art_C({ navHieght }: { navHieght: number }) {
  return (
    <div style={{ scrollMarginTop: navHieght }} id={'work'} className={` overflow-hidden  h-screen relative`}>

      <Img_art_c></Img_art_c>




    </div>
  )
}