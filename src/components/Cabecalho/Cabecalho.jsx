import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./cabecalho.scss"

export default function Cabecalho() {
  return (
    <header className="header">
      <div className="imgLogo">
        <Image src="/logo.svg" alt="Logo" width="200" height="30"></Image>
      </div>
      <div className="menu">
        <Link href="/home" className="block py-7 transition-all duration-300 ease-out font-extrabold transform scale-100 opacity-100 hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90">Home</Link>
        <Link href="/about" className="block py-7 transition-all duration-300 ease-out font-extrabold transform scale-100 opacity-100 hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90">Sobre nós</Link>
        <Link href="" className="block py-7 transition-all duration-300 ease-out font-extrabold transform scale-100 opacity-100 hover:scale-110 hover:opacity-90 focus:scale-110 focus:opacity-90">Perfil</Link>
      </div>
    </header>
  )
}
