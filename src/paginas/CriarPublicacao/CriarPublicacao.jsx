import { useState } from 'react'
import { useNavigate,  useParams } from 'react-router-dom'
import EscolherImagem from '../../componentes/EscolherImagem/EscolherImagem'
import CamposTexto from '../../componentes/CamposTexto/CamposTexto'
import BotoesFormulario from '../../componentes/BotoesFormulario/BotoesFormulario'
import EditarPublicacao from '../../paginas/EditarPublicacao/EditarPublicacao'
import { publicar } from '../../utils/publicar/publicar'
import './CriarPublicacao.css'

function CriarPublicacao() {
  const navegar = useNavigate()
    const { id } = useParams()

  const [imagem, setImagem] = useState('')
  const [hashtags, setHashtags] = useState('')
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [erro, setErro] = useState('')

  function aoEscolherImagem(imagemEscolhida) {
    setImagem(imagemEscolhida)
    setErro('')
  }

  function aoEnviar(evento) {
    evento.preventDefault()

    const mensagem = publicar({ imagem, hashtags, titulo, descricao })

    if (mensagem === '') {
      navegar('/')
    } else {
      setErro(mensagem)
    }
  }

  if (id !== undefined) {
    return <EditarPublicacao id={id} />
  }

  return (
    <form className="formulario" onSubmit={aoEnviar}>
      <h1 className="formulario_titulo">Nova publicação</h1>

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

      <BotoesFormulario aoCancelar={() => navegar('/')} />
    </form>
  )
}


export default CriarPublicacao