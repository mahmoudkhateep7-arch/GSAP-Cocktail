import { Images } from "./dataArraysExported"
import Image_Card_C from "./image_card"


export default function BentoImages() {

  return (
    <section className={`py-6 max-sm:px-2 px-5 `}>
      <div className={`max-w-7xl mx-auto`}>
        <div className={`grid  grid-cols-4 gap-5`}>
          {Images.map(({ col_span_or_hidden, imgUrl }, idx) => {
            return (
              <Image_Card_C
                col_span_or_hidden={col_span_or_hidden}

                idx={idx} imgUrl={imgUrl} key={idx}
              ></Image_Card_C>
            )
          })}


        </div>
      </div>
    </section>
  )
}