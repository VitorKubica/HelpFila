import React from 'react'
import Lupa from '../components/Lupa/Lupa'
import Cabecalho from '../components/Cabecalho/Cabecalho'
import Rodape from '../components/Rodape/Rodape'
import "./Home.scss"
import Image from 'next/image'

export default function page() {
  return (
    <div className="containerHome">
      <Cabecalho/>

        <h1>Digite o nome da clínica ou hospital</h1>
        <div className="Lupa">
          <Lupa/>
        </div>
        
        <Image src="/doctorvector.png" height={350} width={520} alt="Vetor Médico"></Image>

        <div className="">
          <Image src="waves-haikei.svg" fill alt="Waves SVG" className="Waves"></Image>
        </div>
        
        
      <Rodape/>
    </div>

  )
}
