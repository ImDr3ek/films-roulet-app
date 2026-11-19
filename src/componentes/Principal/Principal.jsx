import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Cabecalho from '../Cabecalho/Cabecalho'
import CabecalhoPerfil from '../CabecalhoPerfil/CabecalhoPerfil'
import Rodape from '../Rodape/Rodape'
import { lerPerfil } from '../../servicos/armazenamentoPerfil'
import './Principal.css'

function Principal() {
    const [perfil, setPerfil] = useState(lerPerfil())
    const local = useLocation()
    const estaNoPerfil = local.pathname === '/perfil'

    return (
        <div className="principal_root">
            {estaNoPerfil ? <CabecalhoPerfil nomeUsuario={perfil.nome} /> : <Cabecalho />}

            <main className="principal_conteudo">
                <Outlet context={{ perfil, setPerfil }} />
            </main>

            <Rodape />
        </div>
    )
}

export default Principal
