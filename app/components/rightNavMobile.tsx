import { navLinks } from "./dataArraysExported"

export default function RignNavMobileC() {
  return (
    <div className={`flex md:hidden gap-4 `}>
      {navLinks.map(({ id, title }) => {
        return (
          <a key={id} href={`#${id}`}>
            {title}
          </a>
        )
      })}
    </div>
  )
}