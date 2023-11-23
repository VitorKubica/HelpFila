import Link from "next/link"
import "../css/login.scss"

export default function Login() {
  return (
    <div>
        <div className="container">
            <form className="form">
                <p className="title">Login</p>
                <label>
                    <input className="input" type="email" placeholder=" Email " required/>
                </label>

                <label>
                    <input className="input" type="password" placeholder=" Senha " required/>
                </label>

                <Link href='../home'><button className="submit">Login</button></Link>

                <p className="signin">Ainda não tem uma conta?  <Link href="./">Registre-se</Link></p>
            </form>
        </div>
    </div>
  )
}
