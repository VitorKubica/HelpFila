"use client";
import Link from "next/link"
import "./login.scss"
import Image from "next/image";
import { useRef, useState } from "react";
 
export default function Login() {
 
    const [error, setError] = useState("");
    const email = useRef();
    const password = useRef();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
   
        try {
          const response = await fetch("http://localhost:5000/clients");
          const clients = await response.json();
          const user = clients.find(
            (u) => u.email === emailValue && u.senha === passwordValue
          );
   
          if (user) {
            setError("");
            console.log("Login bem-sucedido!");
            let token =
              Math.random().toString(16).substring(2) +
              Math.random().toString(16).substring(2);
 
            sessionStorage.setItem("userData", user.nome);
            sessionStorage.setItem("userData", user.email);
            sessionStorage.setItem("senhaData", token);
            window.location = "/home";
          } else {
            console.log("nao foi!");
            setError("Credenciais inválidas. Tente novamente.");
          }
        } catch (error) {
          setError("Erro ao fazer login. Tente novamente mais tarde.");
          console.log("Erro ao fazer login:", error);
        }
      };
 
  return (
    <div className="pagina">
        <div className="imagem">
            <Image src="/logo.svg" alt="logo" width="400" height="100"></Image>
        </div>
    <div className="login">
        <div className="container">
            <form className="form_login" onSubmit={handleSubmit}>
                <p className="title">Login</p>
                <label>
                    <input className="input" type="email" placeholder=" Email " ref={email} required/>
                </label>
 
                <label>
                    <input className="input" type="password" placeholder=" Senha " ref={password} required/>
                </label>
 
                <button className="submit" type="submit">Login</button>
                {error && <p className="border ite">{error}</p>}
                <p className="signin">Ainda não tem uma conta?  <Link href="./">Registre-se</Link></p>
            </form>
            </div>
        </div>
    </div>
  )
}