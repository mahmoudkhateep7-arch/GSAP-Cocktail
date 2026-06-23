
"use client";
import Image from "next/image"
import logoImage from '../../public/images/logo.png'
import { useState } from "react"
import { Loader } from 'lucide-react'
export default function LogoImageC() {
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const handleLoadDone = () => {
    setTimeout(() => {
      setLoading(false)
    }, 300);
  }
  const errhappendFunction = () => {
    setTimeout(() => {
      setLoading(false)
      setErr(true)
    }, 300);
  }
  return (
    <div className={`relative w-8 h-8  overflow-hidden `}>
      {err ? 'eror' :
        <Image onError={errhappendFunction} onLoad={handleLoadDone} className={`h-8 ${loading ? 'opacity-0' : 'opacity-100'} relative  w-8 object-cover`} alt={'logo'} src={logoImage} width={32} height={32} />

      }
      {loading &&

        <div className={`absolute flex justify-center items-center  inset-0 w-full h-full `}>
          <Loader className={`animate-spin`} />
        </div>
      }
    </div>
  )
}