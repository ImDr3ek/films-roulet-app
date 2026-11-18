import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Principal from "./componentes/Principal/Principal";
import Inicio from "./paginas/Inicio/Inicio";
import EmBreve from "./paginas/EmBreve/EmBreve";
import CriarPublicacao from "./utils/CriarPublicacao/CriarPublicacao";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <Principal />,
    children: [
      { path: "", element: <Inicio /> },
      { path: "publicacao/nova", element: <CriarPublicacao /> },
      { path: "roleta", element: <EmBreve titulo="Roleta" /> },
      { path: "perfil", element: <EmBreve titulo="Perfil" /> },
      { path: "reacoes", element: <EmBreve titulo="Reações" /> },
    ],
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;