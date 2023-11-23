import {Outlet,Link,useLocation} from 'react-router-dom'
import escudo from '../img/Escudo.png'

const Layout = () => {
    const location = useLocation();
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-color-green-oficial px-5 py-10'>
                <div className='justify-between'>
                    <img
                            src={escudo}
                            alt="Descripción de la imagen"
                            className="object-cover rounded-lg mx-auto h-40 w-28"
                    />
                    <h2 className='text-4xl font-black text-center text-white'>Alerta de Robos</h2>

                </div>

                <nav className='mt-10'>
                    <Link className={`${location.pathname === '/inicio/principal' ? 'text-red-700 bg-color-input-fondo' : 'text-white' } rounded-lg font-extrabold text-2xl block mt-2  hover:text-blue-300 text-white`} 
                    to='/'>Denuncias</Link>

                    <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white' } font-extrabold  text-2xl block mt-2 hover:text-blue-300 text-white`} 
                    to='/clientes/nuevo'>######</Link>

                </nav>
            </aside>

            <main className='md:w-3/4 md:h-screen overflow-scroll'>
                <Outlet/>
            </main>
        

        </div>
    )
}

export default Layout
