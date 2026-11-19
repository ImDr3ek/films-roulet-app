import './CampoEditavel.css'
import { useState } from 'react'
import { FaPencilAlt, FaCheck, FaTimes } from 'react-icons/fa'

function CampoEditavel({valor, minimo, maximo, mensagemErro, classeTexto, aoSalvar}) {
const [editando, setEditando] = useState(false)
const [texto, setTexto] = useState(valor)
const [erro, setErro] = useState('')

function iniciarEdicao() {
    setTexto(valor)
    setErro('')
    setEditando(true)

}

function cancelarEdicao() {
    setEditando(false)
    setErro('')
}   

function salvarEdicao(evento) {
    evento.preventDefault()

    const limpo = texto.trim()
    if (limpo.length < minimo) {
        setErro(mensagemErro)
        return  
    }   

aoSalvar(limpo)
setEditando(false)
setErro('')
}

if (editando) {
return (
      <form className="campo_editavel_root" onSubmit={salvarEdicao}>
        <div className="campo_editavel_linha">
              <input
            className="campo_editavel_input"
            type="text"
            value={texto}
            maxLength={maximo}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit" className="campo_editavel_botao">
            <FaCheck size={16} />
          </button>
          <button type="button" className="campo_editavel_botao" onClick={cancelarEdicao}>
            <FaTimes size={16} />
          </button>
        </div>
        {erro && <p className="campo_editavel_erro">{erro}</p>}
      </form>
    )
  }

  return (
    <div className="campo_editavel_root">
      <div className="campo_editavel_linha">
        <span className={classeTexto}>{valor}</span>
        <button type="button" className="campo_editavel_botao" onClick={iniciarEdicao}>
          <FaPencilAlt size={16} />
        </button>
      </div>
    </div>
  )


}

export default CampoEditavel

