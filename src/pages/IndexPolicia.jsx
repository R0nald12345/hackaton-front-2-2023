import { useEffect, useState } from 'react';
import { obtenerDatosPolicia } from '../apiServices/apiServices';
import fondoPrincipal from '../img/plaza-24-Septiembre.jpg';
import NombrePolicia from '../components/NombrePolicia';

const IndexPolicia = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const getDatos = async () => {
      try {
        const getDatoPrincipal = await obtenerDatosPolicia();
        console.log(getDatoPrincipal); // Log the data here
        setDatos(getDatoPrincipal);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    getDatos();
  }, []);

  console.log(datos);

  return (
    <div className="relative bg-cover w-full" style={{ backgroundImage: `url(${fondoPrincipal})`, backgroundSize: 'cover' }}>
      <h1 className="font-black text-4xl text-color-green-oficial text-center mt-3">Denuncias</h1>
      <p className="mt-3 text-center font-semibold">Administra las denuncias</p>

      {datos.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-color-green-oficial bg-opacity-50 text-white py-5'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Responsable</th>
              <th className='p-2'>Numero</th>
              <th className='p-2'>Mas Detalles</th>
            </tr>
          </thead>

          <tbody className='rounded-lg'>
            {datos.map(dato => (
              <NombrePolicia
                datos = {dato}
                key={dato.id}
                
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'>No hay clientes</p>
      )}
    </div>
  );
};

export default IndexPolicia;
