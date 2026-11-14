import { Outlet } from 'react-router-dom'
import Cabecalho from '../Cabecalho'
import Rodape from '../Rodape'
import './Principal.css'

function Principal() {
    return (<div className="principal_root">
        <Cabecalho />
        <main className="principal_conteudo">
            <Outlet />
        </main>
        <Rodape />
    </div>
    )
}

export default Principal