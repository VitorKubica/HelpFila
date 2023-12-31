import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from 'react';
import "./RodapeAbout.scss";
import Link from 'next/link';

export default function RodapeAbout() {
  
    const teamMembers = [
        {
          nome: "Nicholas Santos",
          foto: "https://avatars.githubusercontent.com/u/105325313?v=4",
          rm: "RM551809",
          turma: "1TDSPM",
          cargo: "Machine Learning & AI",
          github: "https://github.com/nichol6s"
        },
        {
            nome: "Murillo Scaff",
            foto: "https://avatars.githubusercontent.com/u/126569253?v=4",
            rm: "RM551641",
            turma: "1TDSPM",
            cargo: "Scrum Master",
            github: "https://github.com/Scaffx"
        },
        {
            nome: "Vitor Kubica",
            foto: "https://avatars.githubusercontent.com/u/107961081?v=4",
            rm: "RM98903",
            turma: "1TDSPM",
            cargo: "Desenvolvedor Frontend ",
            github: "https://github.com/VitorKubica"
        },
        {
            nome: "Kauan de Almeida",
            foto: "https://avatars.githubusercontent.com/u/126576641?v=4",
            rm: "RM552075",
            turma: "1TDSPM",
            cargo: "Backend Java & Database",
            github: "https://github.com/k-alm"
        },
        {
            nome: "Beatriz Svestka",
            foto: "https://avatars.githubusercontent.com/u/89924879?v=4",
            rm: "RM551534",
            turma: "1TDSPM",
            cargo: "Backend Python",
            github: "https://github.com/biasvestka"
        },
      ];

    return (
    <footer>
      <div className="row">

      <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <a href={member.github} target="_blank">
                <img src={member.foto} width="115px" alt={`Foto do ${member.nome} no GitHub`} />
                <sub>
                  <strong>{member.nome}</strong>
                </sub>
              </a>
              <p>RM: {member.rm}</p>
              <p>Turma: {member.turma}</p>
              <p>Cargo: {member.cargo}</p>
              
            </div>
          ))}
        </div>

        <div className="SM">
          <img src="/logo.svg" alt="Logo HelpFila" />
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
