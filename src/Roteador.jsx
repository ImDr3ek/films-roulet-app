import { Routes, Route } from 'react-router-dom'
import Principal from './componentes/Principal/Principal'
import Inicio from './paginas/Inicio/Inicio'
import EmBreve from './paginas/EmBreve/EmBreve'
import CriarPublicacao from './utils/CriarPublicacao/CriarPublicacao'

function Roteador() {
  return (
    <Routes>
      <Route element={<Principal />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/publicacao/nova" element={<CriarPublicacao />} />
        <Route path="/roleta" element={<EmBreve titulo="Roleta" />} />
        <Route path="/perfil" element={<EmBreve titulo="Perfil" />} />
        <Route path="/reacoes" element={<EmBreve titulo="Reações" />} />
      </Route>
    </Routes>
  )
}

export default Roteador