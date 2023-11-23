import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../../css/cabecalho.scss"


export default function Cabecalho() {
  return (
    <header className="header">
      <div className="imgLogo">
        <Image src="/logo.svg" alt="Logo" width="200" height="30"></Image>
      </div>
      <div className="menu">
        <Link href="/home" className="link_cabecalho">Home</Link>
        <Link href="">Conteúdo</Link>
        <Link href="/about">Sobre nós</Link>
        <Link href="">Perfil</Link>
      </div>
    </header>
  )
}
