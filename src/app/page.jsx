import Link from "next/link"
import "./login.scss"

export default function Registrar() {
  return (
    <div>
        <div className="container">
            <form className="form">
                <p className="title">Registrar</p>
                <p className="message">Se registre agora para ter acesso a nossa página!</p>
                <div className="flex">
                <label>
                    <input className="input" type="text" placeholder=" Primeiro nome" required/>
                </label>

                <label>
                    <input className="input" type="text" placeholder=" Sobrenome " required/>
                </label>
                </div>
                
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

                <Link href='./home'><button className="submit">Submit</button></Link>

                <p className="signin">Já possui uma conta? <Link href="./login">Login</Link></p>
            </form>
        </div>
    </div>

  )
}
