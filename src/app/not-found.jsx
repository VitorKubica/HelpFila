import Image from "next/image";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="error-main">
      <section className="flex justify-center my-10">
        <Image src="/404.svg" alt="Imagem de erro" width={435} height={435} />
        <div className="flex flex-col items-center text-center justify-around w-80">
          <h1 className="text-5xl font-bold text-white mb-4">404...</h1>
          <h2 className="text-2xl mb-2 text-white">Caminho errado!</h2>
          <h2 className="text-2xl mb-4 text-white">Não encontramos essa página.</h2>
          <Link href="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Volte para o início</Link>
        </div>
      </section>
    </div>
  );
}