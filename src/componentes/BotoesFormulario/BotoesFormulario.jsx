import './BotoesFormulario.css'


function BotoesFormulario({ editando, aoCancelar, aoApagar}) {
 if(editando) {
    return (
      <div className="formulario_botoes">
        <button type="button" className="formulario_cancelar" onClick={aoApagar}>
          Apagar
        </button>
        <button type="submit" className="formulario_publicar">
          Atualizar
        </button>
      </div>
    )

   
}
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