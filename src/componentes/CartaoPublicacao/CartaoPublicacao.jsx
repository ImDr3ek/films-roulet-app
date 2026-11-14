import { FaRegComment, FaRegHeart, FaBars } from 'react-icons/fa'
import './CartaoPublicacao.css'

function CartaoPublicacao({ publicacao }) {
    return (
        <article className="cartao_publicacao_root">
            <div className="publicacao_cartao">
                <img className="publicacao_cartao_imagem"
                    src={publicacao.imagem} alt={publicacao.titulo} />

                <div className="publicacao_acoes">
                    <button className="publicacao_botao"><FaRegComment size={18} /></button>
                    <button className="publicacao_botao"><FaRegHeart size={18} /></button>
                    <button className="publicacao_botao"><FaBars size={18} /></button>
                </div>
            </div>

            <h2 className="publicacao_titulo">{publicacao.titulo}</h2>
            <p className="publicacao_descricao">{publicacao.descricao}</p>
            <p className="publicacao_hashtags">{publicacao.hashtags}</p>

        </article>
    )
}

export default CartaoPublicacao
