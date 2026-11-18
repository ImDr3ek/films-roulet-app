import './CamposTexto.css'

function CamposTexto({ hashtags, setHashtags, 
    titulo, setTitulo, descricao, setDescricao }) {
  return (
    <>
      <label className="formulario_campo">
        Hashtags
        <input
          type="text"
          placeholder="#filmetopp"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
        />
      </label>

      <label className="formulario_campo">
        Título
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </label>

      <label className="formulario_campo">
        Descrição
        <textarea rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>
    </>
  )
}

export default CamposTexto