import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { FaUser, FaLink, FaGripLinesVertical, FaRegBookmark } from 'react-icons/fa'
import CampoEditavel from '../../componentes/CampoEditavel/CampoEditavel'
import MiniaturaPublicacao from '../../componentes/MiniaturaPublicacao/MiniaturaPublicacao'
import { listarPublicacoes } from '../../servicos/armazenamentoPublicacoes'
import { salvarPerfil } from '../../servicos/armazenamentoPerfil'
import './Perfil.css'

function Perfil() {
  const { perfil, setPerfil } = useOutletContext()
  const [publicacoes, setPublicacoes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setPublicacoes(listarPublicacoes())
  }, [])

  function salvarNome(novoNome) {
    const novoPerfil = { ...perfil, nome: novoNome }
    salvarPerfil(novoPerfil)
    setPerfil(novoPerfil)
  }

  function salvarDescricao(novaDescricao) {
    const novoPerfil = { ...perfil, descricao: novaDescricao }
    salvarPerfil(novoPerfil)
    setPerfil(novoPerfil)
  }

  return (
    <div className="perfil_root">
      <section className="perfil_info">
        <div className="perfil_foto">
          <FaUser size={64} />
        </div>

        <CampoEditavel
          valor={perfil.nome}
          minimo={1}
          maximo={20}
          mensagemErro="O nome não pode ficar vazio."
          classeTexto="perfil_nome"
          aoSalvar={salvarNome}
        />

        <CampoEditavel
          valor={perfil.descricao}
          minimo={20}
          maximo={100}
          mensagemErro="A descrição precisa ter pelo menos 20 caracteres."
          classeTexto="perfil_descricao"
          aoSalvar={salvarDescricao}
        />
      </section>

      <nav className="perfil_abas">
        <button className="perfil_aba"><FaLink size={22} /></button>
        <button className="perfil_aba"><FaGripLinesVertical size={22} /></button>
        <button className="perfil_aba"><FaRegBookmark size={22} /></button>
      </nav>

      {publicacoes.length === 0 ? (
        <p className="perfil_vazio">Você ainda não tem publicações.</p>
      ) : (
        <section className="perfil_grade">
          {publicacoes.map((publicacao) => (
            <MiniaturaPublicacao
              key={publicacao.id}
              publicacao={publicacao}
              aoClicar={() => navigate('/publicacao/' + publicacao.id)}
            />
          ))}
        </section>
      )}
    </div>
  )
}

export default Perfil
