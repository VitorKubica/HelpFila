"use client";
import Link from "next/link"
import "./login/login.scss"
import Image from "next/image";

export default function Registrar() {
    function handleSubmit(){
        alert("Foi!")
        window.location = "/login"
    }

  return (
    <div className="pagina">
        <div className="imagem">
         <Image src="/logo.svg" alt="logo" width="400" height="100"></Image>
        </div>
    <div className="login">        
        <div className="container_registrar">
            <form className="form"   onSubmit={handleSubmit}>
                <p className="title">Registrar</p>
                <p className="message">Se registre agora para ter acesso a nossa página!</p>
                <label>
                    <input className="input" type="text" placeholder="Nome Completo" required/>
                </label>

                <label>
                    <input className="input" type="phone" placeholder="Telefone" required/>
                </label>

                <label>
                    <input className="input" type="cep" placeholder="CEP" required/>
                </label>

                <label>
                    <input className="input" type="email" placeholder="Email" required/>
                </label>

                <label>
                    <input className="input" type="password" placeholder="Senha" required/>
                </label>

                <label>
                    <input className="input" type="password" placeholder="Confirme sua senha" required/>
                </label>

                <button className="submit" type="submit">Submit</button>

                <p className="signin">Já possui uma conta? <Link href="./login">Login</Link></p>
            </form>
        </div>
    </div>
    </div>
  )
}
