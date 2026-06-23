import Menu_text_Layer_c from "./menue_text_layer_c";

export default function Menu_section() {
  return (
    <section className={`py-10 px-2 relative  `}>

      <div className={`max-w-7xl relative z-40  mx-auto`}>

        {/* text part upper layer */}

        {/* all text go in this relative div cuz of lyers */}
        {/* text component her */}
        <Menu_text_Layer_c></Menu_text_Layer_c>


        {/* absolute leafs later */}

      </div>
      <div className={`absolute inset-0 `}>
        <div id={`menu_leaf`} className={`relative  h-full w-full`}></div>
      </div>
      <div className={`absolute inset-0 `}>
        <div id={`menu_leaf_right`} className={`relative -translate-y-50 h-full w-full`}></div>
      </div>


    </section>
  )
}