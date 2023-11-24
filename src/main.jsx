import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
// import Index, {loader as clientesLoader} from './pages/Index.jsx'
import NuevoCLiente from './pages/NuevoCliente.jsx'
import Mapa from './Mapa/Mapa.jsx'

import Login from './components/Login.jsx'
import DatosClienteCompleto from './components/DatosClienteCompleto.jsx'
import DatoPoliciaCompleto from './components/DatoPoliciaCompleto.jsx'
import IndexPolicia from './pages/IndexPolicia.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
        path: '/inicio/principal',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'detalle/:id/denuncia',
            element: <DatosClienteCompleto/>
          },
          {
            path: 'control/policial',
            element: <IndexPolicia/>
            // element: <NuevoCLiente />
          },
          {
            path: 'detalle/:id/policia',
            element: <DatoPoliciaCompleto/>
          },
          
        ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    <RouterProvider router = {router}/>
    {/* <DatoPoliciaCompleto/> */}
     {/* <Mapa/> */}
     {/* <DatoPoliciaCompleto/> */}

  </React.StrictMode>,
)
