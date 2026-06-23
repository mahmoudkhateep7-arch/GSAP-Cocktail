import LogoImageC from "./logoImage";

export default function LeftNavC() {
  return (
    <a href="#home" className={`flex items-center gap-2`}>
      <LogoImageC></LogoImageC>
      <span className={`text-3xl  font-Modern_Negra_Font`}>Velvet Pour</span>
    </a>
  )
}