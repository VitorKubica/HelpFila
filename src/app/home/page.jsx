import React from 'react'
import Image from 'next/image'
import Cabecalho from '../components/Cabecalho/Cabecalho'
import Rodape from '../components/Rodape/Rodape'

export default function page() {
  return (
    <body>
      <Cabecalho></Cabecalho>

      <div>
      <div>
        <h1>Digite o nome da clínica ou hospital</h1>
      </div>
      
      <div>
        <input type="text" placeholder="Pesquisar..." />
      </div>
    </div>
    
    <Rodape></Rodape>
    </body>
    
    
  )
}
