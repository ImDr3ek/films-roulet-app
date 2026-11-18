import './BotoesFormulario.css'


function BotoesFormulario({ aoCancelar }) {
  return (
    <div className="formulario_botoes">
      <button type="button" className="formulario_cancelar"
       onClick={aoCancelar}>
        Cancelar
      </button>
      <button type="submit" className="formulario_publicar">
        Publicar
      </button>
    </div>
  )
}


export default BotoesFormulario