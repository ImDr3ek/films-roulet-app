import { NavLink } from 'react-router-dom'
import { FaHome, FaDharmachakra, FaUser } from 'react-icons/fa'
import './Rodape.css'

function Rodape() {
    return (
        <nav className="rodape_root">
            <NavLink to="/" className="rodape_botao">
                <FaHome size={20} />
            </NavLink>

            <NavLink to="/roleta" className="rodape_botao">
                <FaDharmachakra size={20} />
            </NavLink>

            <NavLink to="/perfil" className="rodape_botao">
                <FaUser size={20} />
            </NavLink>

        </nav>
    )
}

export default Rodape