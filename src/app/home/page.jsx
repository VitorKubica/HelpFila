import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      
      <div>
        <h1>Digite o nome da clínica ou hospital</h1>
      </div>
      
      <div>
        <input type="text" placeholder="Pesquisar..." />
      </div>

      <Image src="/medico_feliz.jpg" alt="Imagem de médico feliz" width={350} height={350} />
    </div>
  )
}
