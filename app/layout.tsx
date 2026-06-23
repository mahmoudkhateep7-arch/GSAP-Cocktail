
import { Mona_Sans, DM_Serif_Text } from 'next/font/google'

import { Metadata } from 'next'
import './style.css'
const Mona_Sans_Font = Mona_Sans({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--Mona_Sans_Font'
})
const DM_Serif_Text_Font = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--DM_Serif_Text_Font'
})
export const metadata: Metadata = {
  title: 'coffee',
  icons: {
    icon: '/images/fb.png'
  }
}

export default function ({ children }: React.PropsWithChildren) {


  return (
    <html lang={'en'}
      className={`
        ${DM_Serif_Text_Font.variable}

          ${Mona_Sans_Font.variable}
      `}

    >

      <body

        className={`
        

        
        
        
        bg-black
        text-white w-full overflow-x-hidden
        relative

        
        `}>
        {children}

      </body>
    </html>
  )
}