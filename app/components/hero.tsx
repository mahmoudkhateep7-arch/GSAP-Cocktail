"use client"
import LeftLeafHero from './leftLeafhero'
import RightHeroLeaf from './rightLeafhero'
import TextConteHero from './textContentHero'
import VideoHero from './videoHero'
export default function HeroC({ navHieght }: { navHieght: number }) {

  return (
    <section style={{}} className={` top-0 overflow-hidden  absolute w-full h-screen`}>
      <div className={`relative   h-full `}>
        <RightHeroLeaf></RightHeroLeaf>

        <LeftLeafHero></LeftLeafHero>

        <TextConteHero></TextConteHero>


        <VideoHero></VideoHero>

      </div>
    </section>
  )
}