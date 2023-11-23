import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import miImagen from '../img/images.png';
import fondoPrincipal from '../img/plaza-24-Septiembre.jpg';
import escudo from '../img/Escudo.png';

const Login = () => {
    const [carnet, setCarnet] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_POST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ci: carnet,
                    password: contrasenia,
                }),
            });

            
            if (!response.ok) {
                console.error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
                const text = await response.text();
                console.error(`Respuesta del servidor: ${text}`);
                // Puedes mostrar un mensaje de error al usuario aquí
                return;
            }

            const jsonData = await response.json();
            console.log('Respuesta del servidor:', jsonData);

            // Redirige después de autenticar
            navigate('/inicio/principal');
        } catch (error) {
            console.error('Error al realizar la solicitud', error);
            // Puedes mostrar un mensaje de error al usuario aquí
        }
    };

    return (
        <div className="relative bg-cover" style={{ backgroundImage: `url(${fondoPrincipal})`, backgroundSize: 'cover' }}>
            <aside className="py-2 bg-color-green-oficial flex justify-center items-center relative z-10">
                <div className='flex'>
                    <img
                        src={escudo}
                        alt="Descripción de la imagen"
                        className="w-10 h-10 object-contain rounded-lg mr-2"
                    />
                    <p className='text-4xl text-center font-bold text-white'>Alerta de Seguridad</p>
                </div>
            </aside>

            <main className="flex flex-col-reverse md:flex-row justify-center items-center h-screen gap-8">
                <form className="px-5 py-3 bg-yellow-100 rounded-lg">
                    <p className="font-bold">Carnet</p>
                    <input
                        type='text'
                        value={carnet}
                        onChange={(e) => setCarnet(e.target.value)}
                        className="bg-color-input-fondo rounded-lg border-2 border-black mb-5 py-1 pl-2"
                    />

                    <p className="font-bold">Contraseña</p>
                    <input
                        type='password'
                        value={contrasenia}
                        onChange={(e) => setContrasenia(e.target.value)}
                        className="bg-color-input-fondo rounded-lg border-2 border-black mb-5 py-1 pl-2"
                    />

                    <button
                        type='button'
                        onClick={handleLogin}
                        className="w-full bg-color-green-oficial text-white font-bold block text-2xl rounded-lg px-6 py-2 hover:bg-green-900">
                        Ingresar
                    </button>
                </form>

                <div className="bg-slate-500 rounded-lg">
                    <img
                        src={miImagen}
                        alt="Descripción de la imagen"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </main>
        </div>
    );
};

export default Login;
