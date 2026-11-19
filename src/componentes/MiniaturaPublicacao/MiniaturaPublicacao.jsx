import { FaRegComment, FaRegHeart, FaBars } from 'react-icons/fa'
import './MiniaturaPublicacao.css'


function MiniaturaPublicacao({ publicacao, aoClicar }) {
  return (
    <button className="miniatura_root" onClick={aoClicar}>
      <img className="miniatura_imagem" src={publicacao.imagem} alt={publicacao.titulo} />

      <div className="miniatura_barra">
        <FaRegComment size={10} />
        <FaRegHeart size={10} />
        <FaBars size={10} />
      </div>
    </button>
  )
}

export default MiniaturaPublicacao