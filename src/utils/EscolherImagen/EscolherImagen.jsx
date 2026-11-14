import { useRef } from 'react'
import './EscolherImagen.css'

function EscolherImagem({ imagem, aoEscolher, aoErro }) {
  const campoImagem = useRef(null)

  function escolherImagem(evento) {
    const arquivo = evento.target.files[0]
    if (!arquivo) {
      return
    }

    if (arquivo.size > 3000000) {
      aoErro('A imagem é muito grande (máximo 2 MB).')
      return
    }

    const leitor = new FileReader()
    leitor.onload = () => {
      aoEscolher(leitor.result)
    }
    leitor.readAsDataURL(arquivo)
  }

  return (
    <>
      <input type="file" accept="image/*" ref={campoImagem} onChange={escolherImagem} hidden />

      <button type="button" className="formulario_imagem" onClick={() => campoImagem.current.click()}>
        {imagem ? <img src={imagem} alt="Pré-visualização" /> : <span>Escolher imagem do dispositivo</span>}
      </button>
    </>
  )
}

export default EscolherImagem