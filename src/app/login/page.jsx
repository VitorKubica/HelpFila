"use client";
import Link from "next/link"
import "./login.scss"

export default function Login() {
    function handleSubmit(){
        alert("Foi!")
        window.location = "/home"
    }

  return (
    <div className="login">
        <div className="container">
            <form className="form_login" onSubmit={handleSubmit}>
                <p className="title">Login</p>
                <label>
                    <input className="input" type="email" placeholder=" Email " required/>
                </label>

                <label>
                    <input className="input" type="password" placeholder=" Senha " required/>
                </label>

                <button className="submit" type="submit">Login</button>

                <p className="signin">Ainda não tem uma conta?  <Link href="./">Registre-se</Link></p>
            </form>
        </div>
    </div>
  )
}
