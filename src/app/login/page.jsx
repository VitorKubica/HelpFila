"use client";
import Link from "next/link"
import "./login.scss"
import Image from "next/image";
 
export default function Login() {
 
  return (
    <div className="pagina">
        <div className="imagem">
            <Image src="/logo.svg" alt="logo" width="400" height="100"></Image>
        </div>
    <div className="login">
        <div className="container">
            <form className="form_login">
                <p className="title">Login</p>
                <label>
                    <input className="input" type="email" placeholder=" Email " required/>
                </label>
 
                <label>
                    <input className="input" type="password" placeholder=" Senha " required/>
                </label>
 
                <Link href="./home"><button className="submit" type="submit">Login</button></Link>
                <p className="signin">Ainda não tem uma conta?  <Link href="./">Registre-se</Link></p>
            </form>
            </div>
        </div>
    </div>
  )
}