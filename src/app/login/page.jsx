import Link from "next/link"
import csslogin from  "../css/login.module.css"

export default function Login() {
  return (
    <div>
        <div className={csslogin.container}>
            <form className={csslogin.form}>
                <p className={csslogin.title}>Login</p>
                <label>
                    <input className={csslogin.input} type="email" placeholder=" Email " required/>
                </label>

                <label>
                    <input className={csslogin.input} type="password" placeholder=" Senha " required/>
                </label>

                <Link href='../home'><button className={csslogin.submit}>Login</button></Link>

                <p className={csslogin.signin}>Ainda não tem uma conta?  <Link href="./">Registre-se</Link></p>
            </form>
        </div>
    </div>
  )
}
