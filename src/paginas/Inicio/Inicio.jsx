import { useEffect, useState } from 'react'
import CartaoPublicacao from '../../componentes/CartaoPublicacao'
import { listarPublicacoes } from '../../servicos/armazenamentoPublicacoes'
import './Inicio.css'

export default function Inicio() {
  const [publicacoes, setPublicacoes] = useState([])

  useEffect(() => {
    setPublicacoes(listarPublicacoes())
  }, [])

  if (publicacoes.length === 0) {
    return (
      <div className="inicio_vazio">
        <p>Ainda não há publicações.</p>
        <p>Toque no + para criar a primeira.</p>
      </div>
    )
  }

  return (
    <div>
      {publicacoes.map((publicacao) => (
        <CartaoPublicacao key={publicacao.id} publicacao={publicacao} />
      ))}
    </div>
  )
}
