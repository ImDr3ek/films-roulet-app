import { FaCog, FaRegMoon } from 'react-icons/fa'
import './CabecalhoPerfil.css'

function CabecalhoPerfil({ nomeUsuario }) {
    return(
        <header className="cabecalho_root">
            <button className="cabecalho_botao">
                <FaRegMoon size={24} />
            </button>

            <div className="cabecalho_perfil_usuario">{nomeUsuario}</div>

            <button className="cabecalho_botao">
                <FaCog size={24} />
            </button>
        </header>
    )
}

export default CabecalhoPerfil