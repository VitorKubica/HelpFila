import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from 'react';
import "../../css/rodape.scss";
import Link from 'next/link';
import Image from "next/image";

export default function Rodape() {
  return (
    <footer>
      <div className="row">

        <div className="Info">
          <h2>Promovendo mais saúde e menos tempo perdido nas filas.</h2>
          <p>Faça parte dessa transformação conosco e adote o HelpFila para uma gestão de filas inteligente e humanizada.</p>
          <div className="info-a ">
            <Link href="https://github.com/VitorKubica/HelpFila" target="_blank" className="link_info">👀 Code</Link>
            <Link href="https://github.com/VitorKubica/HelpFila" target="_blank" className="link_info">👋 Contact</Link>
          </div>
        </div>
        <div className="SM">
          <img src="/logo.png" alt="Logo HelpFila" />
          <p>@ 2023 HelpFila. All Rights Reserved.</p>
          <div className="socialMedia">
            <Link href="" className="link_sm"><FaFacebook style={{ color: "white" }} /></Link>
            <Link href="" className="link_sm"><FaTwitter style={{ color: "white" }} /></Link>
            <Link href="" className="link_sm"><FaInstagram style={{ color: "white", }} /></Link>
          </div>

        </div>
      </div>

    </footer>
  )
}
