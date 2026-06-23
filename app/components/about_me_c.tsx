import Abotu_Me_Text_C from "./aboutmetext";

export default function About_Me_c({ navHieght }: { navHieght: number }) {
  return (
    <section style={{ scrollMarginTop: navHieght }} id={`about`} className={`py-8  `}>
      <div className={`max-w-7xl mx-auto`}>

        <Abotu_Me_Text_C></Abotu_Me_Text_C>



      </div>
    </section>
  )
}