import Overview from "./Overview"
import Cabecalho from "../components/Cabecalho/Cabecalho"
import Rodape from "../components/Rodape/Rodape"

export default function page() {
  return (
    <div>
        <Cabecalho/>
        <Overview/>
        <Rodape/>
    </div>
  )
}
