import "./Cabecalho.css";
import { useNavigate } from 'react-router-dom'
import { FaRegHeart, FaPlus } from 'react-icons/fa'

function Cabecalho() {
    const navigate = useNavigate();

    return (
        <header className="cabecalho_root">
            <button className="cabecalho_botao"
                aoClicar={() => navigate('/reacoes')}>
                <FaRegHeart size={24} />
            </button>

            <div className="cabecalho_logo">films-roulet</div>
            <button className="cabecalho_botao" 
            onClick={() => navigate('/publicacao/nova')}>
                <FaPlus size={24} />
            </button>
        </header>
    )
}

export default Cabecalho