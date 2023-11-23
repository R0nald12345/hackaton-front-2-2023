import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index, {loader as clientesLoader} from './pages/Index.jsx'
import NuevoCLiente from './pages/NuevoCliente.jsx'
import Mapa from './Mapa/Mapa.jsx'

import Login from './components/Login.jsx'

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
            loader: clientesLoader
          },
          {
            path: 'clientes/nuevo',
            element: <NuevoCLiente />
          }
        ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <RouterProvider router = {router}/> */}
    {/* <Layout/> */}

     <Mapa/>

  </React.StrictMode>,
)
