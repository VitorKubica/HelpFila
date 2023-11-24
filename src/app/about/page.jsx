import Overview from "./Overview"
import Cabecalho from "../components/Cabecalho/Cabecalho"
import RodapeAbout from "../components/RodapeAbout/RodapeAbout"

export default function page() {
  return (
    <div>
        <Cabecalho/>
        <Overview/>
        <RodapeAbout/>
    </div>
  )
}
