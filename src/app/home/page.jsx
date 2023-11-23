import React from 'react'
import Lupa from '../components/Lupa/Lupa'
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
        <Lupa></Lupa>
      </div>
    </div>
    
    <Rodape></Rodape>
    </body>
    
    
  )
}
