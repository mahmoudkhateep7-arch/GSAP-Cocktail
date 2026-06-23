export default function Abotu_Me_Text_C() {
  return (
    <div className={`flex max-lg:pl-10 max-[500px]:gap-3  max-sm:px-2 max-lg:flex-col gap-10 justify-between `}>

      <div className={`flex flex-col gap-4`}>
        <button className={`block w-fit px-8 max-[500px]:rounded-none border-0 outline-0 cursor-pointer py-3 bg-white text-black rounded-full text-xl`}>Best Cocktails</button>
        <p className={`flex max-sm:hidden max-sm:grid-cols-2 flex-col gap-2 font-Modern_Negra_Font text-6xl`}>
          <span>Where every detail</span>
          <span>matters -from muddle</span>
          <span>to garnish</span>

        </p>
        <p className={`flex max-[400px]:text-3xl sm:hidden max-[500px]:text-4xl  font-Modern_Negra_Font text-6xl`}>
          Where every detail
          matters -from muddle
          to garnish

        </p>
      </div>

      <div className={`w-88 max-lg:w-full pr-3 flex flex-col gap-4`}>
        <p className={`leading-8 max-[400px]:text-sm max-[400px]:leading-6`}>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
        <div className={`flex items-end`}>
          <span className={`text-6xl text-yellow-400`}>4.5</span>
          <span className={`text-3xl font-semibold`}>/5</span>

        </div>
        <div>More than +12000 customers</div>
      </div>
    </div>
  )
}