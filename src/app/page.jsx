import Link from "next/link"

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form class="form">
    <p class="title">login </p> 
    <label>
        <span>Email</span>
        <input class="input" type="email" placeholder="" required=""/>
    </label> 
    <label>
        <span>Password</span>
        <input class="input" type="password" placeholder="" required=""/>
    </label>
    <button class="submit">Login</button>
    <p class="signin">Não tem uma conta? 
    <Link href="./home">Registrar-se</Link></p>
</form>
    </main>
  )
}
