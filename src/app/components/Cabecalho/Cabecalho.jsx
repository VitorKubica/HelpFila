import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import csscabecalho from "../../css/cabecalho.module.css"


export default function Cabecalho() {
  return (
    <header className={csscabecalho.header}>
      <div className={csscabecalho.imgLogo}>
        <Image src="/logo.png" alt="Logo" width="200" height="30"></Image>
      </div>
      <div className={csscabecalho.menu}>
        <Link href="">Home</Link>
        <Link href="">Conteúdo</Link>
        <Link href="">Sobre nós</Link>
        <Link href="">Perfil</Link>
      </div>
    </header>
  )
}
