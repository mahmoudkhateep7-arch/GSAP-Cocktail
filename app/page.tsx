'use client'
import { useState } from "react";
import HeroC from "./components/hero";
import NavbarC from "./components/navbarC";
import { allCocktails, cocktailLists, Images, mockTailLists } from "./components/dataArraysExported";
import Coctail_Right_Leaf_C from "./components/coctail_right_leaf";
import Coctail_Left_Leaf_C from "./components/coctail_left_leaf";
import Coctail_Text_Left_C from "./components/coctail_text_left";
import Coctail_Right_Text_C from "./components/coctail_rigth_text";
import Coctail_C from "./components/coctail_C";
import Abotu_Me_Text_C from "./components/aboutmetext";
import Image from "next/image";
import BentoImages from "./components/ebntoImages";
import About_Me_c from "./components/about_me_c";
import Art_C from "./components/art";
import Menu_text_Layer_c from "./components/menue_text_layer_c";
export default function App() {
  const [navHieght, setNavHieght] = useState(60)


  return (
    <div id={`home`} className={` relative z-0 font-Mona_Sans_Font`}>
      {/* htere is a noise bg with a hight of screen and it is fixed */}
      <div id={'noise_bg'} className={`fixed h-screen w-full  -z-1`}></div>



      {/* <NavbarC setNavHieght={setNavHieght}></NavbarC> */}
      {/* <HeroC navHieght={navHieght}></HeroC> */}


      {/* clean up */}
      {/* <div style={{ height: `calc(100vh - ${navHieght}px)` }} className={``}></div> */}



      {/* <Coctail_C></Coctail_C> */}

      {/* aboutme text section  */}
      {/* <About_Me_c></About_Me_c> */}


      {/* <BentoImages></BentoImages> */}



      {/* <Art_C></Art_C> */}
      {/* <div className={`h-screen`}></div> */}
      <div className={`h-40`}></div>
      {/* menu */}
      <section className={`py-10 px-2 bg-amber-700`}>
        <div className={`max-w-7xl mx-auto`}>

          {/* text part upper layer */}
          <div className={`relative `}>

            {/* all text go in this relative div cuz of lyers */}
            {/* text component her */}
            <Menu_text_Layer_c></Menu_text_Layer_c>


            {/* absolute leafs later */}
          </div>
        </div>


      </section>







      <div className={`h-screen`}></div>
      <div className={`h-screen`}></div>
      <div className={`h-screen`}></div>
      <div className={`h-screen`}></div>













    </div >
  );
}


