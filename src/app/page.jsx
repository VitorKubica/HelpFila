import Link from "next/link"
import "./login/login.scss"

export default function Registrar() {
  return (
    <div className="login">
        <div className="container_registrar">
            <form className="form">
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

                <Link href='./login'><button className="submit">Submit</button></Link>

                <p className="signin">Já possui uma conta? <Link href="./login">Login</Link></p>
            </form>
        </div>
    </div>

  )
}
