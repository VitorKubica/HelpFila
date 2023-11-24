import Overview from "./Overview"
import Cabecalho from "../../src/components/Cabecalho/Cabecalho"
import RodapeAbout from "../../src/components/RodapeAbout/RodapeAbout"

export default function page() {
  return (
    <div>
        <Cabecalho/>
        <Overview/>
        <RodapeAbout/>
    </div>
  )
}
