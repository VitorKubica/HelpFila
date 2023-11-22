import Link from "next/link"
import csslogin from  "./css/login.module.css"

export default function Registrar() {
  return (
    <div>
        <div className={csslogin.container}>
            <form className={csslogin.form}>
                <p className={csslogin.title}>Registrar</p>
                <p className={csslogin.message}>Se registre agora para ter acesso a nossa página!</p>
                <div className={csslogin.flex}>
                <label>
                    <input className={csslogin.input} type="text" placeholder=" Primeiro nome" required/>
                </label>

                <label>
                    <input className={csslogin.input} type="text" placeholder=" Sobrenome " required/>
                </label>
                </div>
                
                <label>
                    <input className={csslogin.input} type="phone" placeholder="Telefone" required/>
                </label>

                <label>
                    <input className={csslogin.input} type="cep" placeholder="CEP" required/>
                </label>

                <label>
                    <input className={csslogin.input} type="email" placeholder="Email" required/>
                </label>

                <label>
                    <input className={csslogin.input} type="password" placeholder="Senha" required/>
                </label>

                <label>
                    <input className={csslogin.input} type="password" placeholder="Confirme sua senha" required/>
                </label>

                <button className={csslogin.submit}>Submit</button>

                <p className={csslogin.signin}>Já possui uma conta? <Link href="./login">Login</Link></p>
            </form>
        </div>
    </div>

  )
}
