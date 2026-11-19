import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EscolherImagem from '../../componentes/EscolherImagem/EscolherImagem'
import CamposTexto from '../../componentes/CamposTexto/CamposTexto'
import BotoesFormulario from '../../componentes/BotoesFormulario/BotoesFormulario'
import { atualizar } from '../../servicos/atualizar'
import { apagar } from '../../servicos/apagarPublicacao'
import { buscarPublicacao } from '../../servicos/armazenamentoPublicacoes'

function EditarPublicacao({ id }) {
  const navegar = useNavigate()

  const [imagem, setImagem] = useState('')
  const [hashtags, setHashtags] = useState('')
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [erro, setErro] = useState('')

  useEffect(() => {
    const publicacao = buscarPublicacao(id)

    if (publicacao) {
      setImagem(publicacao.imagem)
      setHashtags(publicacao.hashtags)
      setTitulo(publicacao.titulo)
      setDescricao(publicacao.descricao)
    } else {
      navegar('/perfil')
    }
  }, [id])

  function aoEscolherImagem(imagemEscolhida) {
    setImagem(imagemEscolhida)
    setErro('')
  }

  function aoEnviar(evento) {
    evento.preventDefault()

    const mensagem = atualizar(id, { imagem, hashtags, titulo, descricao })

    if (mensagem === '') {
      navegar('/perfil')
    } else {
      setErro(mensagem)
    }
  }

  function aoApagar() {
    const mensagem = apagar(id)

    if (mensagem === '') {
      navegar('/perfil')
    } else {
      setErro(mensagem)
    }
  }

  return (
    <form className="formulario" onSubmit={aoEnviar}>
      <h1 className="formulario_titulo">Editar publicação</h1>

      <EscolherImagem imagem={imagem} aoEscolher={aoEscolherImagem} aoErro={setErro} />

      <CamposTexto
        hashtags={hashtags}
        setHashtags={setHashtags}
        titulo={titulo}
        setTitulo={setTitulo}
        descricao={descricao}
        setDescricao={setDescricao}
      />

      {erro && <p className="formulario_erro">{erro}</p>}

      <BotoesFormulario editando={true} aoApagar={aoApagar} />
    </form>
  )
}

export default EditarPublicacao