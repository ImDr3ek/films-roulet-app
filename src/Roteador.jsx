import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Principal from "./componentes/Principal/Principal";
import Inicio from "./paginas/Inicio/Inicio";
import EmBreve from "./paginas/EmBreve/EmBreve";
import Perfil from "./paginas/Perfil/Perfil";
import CriarPublicacao from "./paginas/CriarPublicacao/CriarPublicacao";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <Principal />,
    children: [
      { path: "", element: <Inicio /> },
{ path: "publicacao/:id?", element: <CriarPublicacao /> },  
    { path: "roleta", element: <EmBreve titulo="Roleta" /> },
      { path: "perfil", element: <Perfil /> },
      { path: "reacoes", element: <EmBreve titulo="Reações" /> },
    ],
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;