import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../../css/cabecalho.scss"


export default function Cabecalho() {
  return (
    <header className="header">
      <div className="imgLogo">
        <Image src="/logo.png" alt="Logo" width="200" height="30"></Image>
      </div>
      <div className="menu">
        <Link href="">Home</Link>
        <Link href="">Conteúdo</Link>
        <Link href="">Sobre nós</Link>
        <Link href="">Perfil</Link>
      </div>
    </header>
  )
}
