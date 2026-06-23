'use client'
import { useState } from "react";
import HeroC from "./components/hero";
import NavbarC from "./components/navbarC";
import Coctail_C from "./components/coctail_C";
import BentoImages from "./components/ebntoImages";
import About_Me_c from "./components/about_me_c";
import Art_C from "./components/art";
import Menu_section from "./components/menu_section";
import Contect_c from "./components/contact_c";
export default function App() {
  const [navHieght, setNavHieght] = useState(60)


  return (
    <div id={`home`} className={` relative z-0 font-Mona_Sans_Font`}>
      {/* htere is a noise bg with a hight of screen and it is fixed */}
      <div id={'noise_bg'} className={`fixed h-screen w-full  -z-1`}></div>



      <NavbarC setNavHieght={setNavHieght}></NavbarC>
      <HeroC navHieght={navHieght}></HeroC>


      {/* clean up */}
      <div style={{ height: `calc(100vh - ${navHieght}px)` }} className={``}></div>



      <Coctail_C navHieght={navHieght}></Coctail_C>

      {/* aboutme text section  */}
      <About_Me_c navHieght={navHieght}></About_Me_c>


      <BentoImages></BentoImages>



      <Art_C navHieght={navHieght}></Art_C>
      <div className={`h-screen`}></div>
      <div className={`h-40`}></div>
      {/* menu */}
      <Menu_section></Menu_section>




      {/* contact */}
      <Contect_c navHieght={navHieght}></Contect_c>

      {/* scroll purpuses */}
      <div className={`h-20`}></div>












    </div >
  );
}


