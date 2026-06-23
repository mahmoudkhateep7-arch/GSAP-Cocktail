import { navLinks } from "./dataArraysExported"
import LinkItemC from "./linkItem"

export default function RightNaveDesktopC() {
  return (
    <div className={`flex max-md:hidden gap-10`}>
      {navLinks.map(({ id, title }) => {
        return (
          <LinkItemC key={id} id={id} title={title}></LinkItemC>
        )
      })}
    </div>
  )
}