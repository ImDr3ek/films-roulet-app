import { Routes, Route } from 'react-router-dom'
import Estrutura from '../componentes/Estrutura'
import Inicio from '../paginas/Inicio'
import CriarPublicacao from '../paginas/CriarPublicacao'
import EmBreve from '../paginas/EmBreve'

 function Roteador() {
  return (
    <Routes>
      <Route element={<Estrutura />}>
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