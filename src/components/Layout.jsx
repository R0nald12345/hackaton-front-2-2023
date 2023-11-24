import {Outlet,Link,useLocation} from 'react-router-dom'
import escudo from '../img/Escudo.png'
import iconoPolice from '../img/Police.png'


import denuncia from '/iconoDenuncia.svg';
import iconoVecino from '/iconoVecino.svg';

const Layout = () => {
    const location = useLocation();
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/5 bg-color-green-oficial px-5 py-10'>
                <div className='justify-between'>
                    <img
                            src={escudo}
                            alt="Descripción de la imagen"
                            className="object-cover rounded-lg mx-auto h-40 w-28"
                    />
                    <h2 className='text-4xl font-black text-center text-white'>Alerta de Robos</h2>

                </div>

                <nav className='mt-10'>
                        
                    <Link className={`${location.pathname === '/inicio/principal' ? 'text-black bg-yellow-500' : 'text-white' } rounded-lg font-extrabold md:text-2xl block mt-2  hover:text-blue-300 text-white pl-5 py-2 flex gap-2`} 
                    to='/'>
                        <img
                            src={denuncia}
                            alt='icono Denuncia'
                        />
                        Denuncias
                    </Link>

                    <Link className={`${location.pathname === 'vecino/lista' ? 'text-blue-300' : 'text-white' } font-extrabold  text-2xl block mt-2 hover:text-blue-300 text-white pl-5 flex gap-2`} 
                    to='/clientes/nuevo'>
                        <img
                            src={iconoVecino}
                            alt='icono Denuncia'
                        />
                        Vecinos
                    </Link>

                    <Link className={`${location.pathname === 'centropolicial/lista' ? 'text-blue-300' : 'text-white' } font-extrabold  text-2xl block mt-2 hover:text-blue-300 text-white px-5 flex gap-2`} 
                        to='control/policial'>
                        <img
                            src={iconoPolice}
                            alt='icono Denuncia'
                        />   
                            Control Policial
                    </Link>

                </nav>
            </aside>

            <main className='md:w-4/5 md:h-screen overflow-scroll p-5'>
                <Outlet/>
            </main>
        

        </div>
    )
}

export default Layout
