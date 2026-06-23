import Coctail_Left_Leaf_C from "./coctail_left_leaf";
import Coctail_Right_Leaf_C from "./coctail_right_leaf";
import Coctail_Right_Text_C from "./coctail_rigth_text";
import Coctail_Text_Left_C from "./coctail_text_left";

export default function Coctail_C({ navHieght }: { navHieght: number }) {
  return (
    <section style={{ scrollMarginTop: navHieght }} id={'cocktails'} className={`px-4   overflow-hidden relative max-sm:px-1`}>
      {/*  */}
      <div id={`parnt_left_right`} className={`max-w-7xl  relative z-10 max-sm:h-auto  max-sm: flex flex-col justify-center mx-auto h-screen`}>

        <div className={`flex max-sm:flex-col max-sm:py-10 max-sm:gap-30 max-[640px]:px-10 max-[420px]:px-2  justify-between `}>

          <Coctail_Text_Left_C></Coctail_Text_Left_C>


          <Coctail_Right_Text_C></Coctail_Right_Text_C>



        </div>
      </div>

      <Coctail_Right_Leaf_C></Coctail_Right_Leaf_C>

      <Coctail_Left_Leaf_C></Coctail_Left_Leaf_C>

    </section>
  )
}