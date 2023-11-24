import { Link } from "react-router-dom";
import iconoObservar from '/iconoObservar.svg';

const NombrePolicia = ({ datos }) => {
    console.log(datos);
    const { id, name, responsible, phone_number } = datos;
  
    const handleImageClick = () => {
      // Utiliza navigate para cambiar la ruta
      navigate(`detalle/${id}/policia`);
    };


    return (
      <tr key={id} className="border-2 text-center bg-transparent">
        <td className=''>
          <p className="text-2xl text-gray-800">{name}</p>
        </td>
  
        <td className="p-6">
          <p className="text-gray-800 text-2xl">{responsible}</p>
        </td>
  
        <td className="p-6">
          <p className="text-gray-800 text-2xl">{phone_number}</p>
        </td>
  
        <td className="p-6 flex gap-3 flex justify-center items-center">
          {/* <div className="flex justify-center items-center gap-3">
            <Link to={`detalle/${datos.id}/policia`} className="mt-2">
              <img
                src={iconoObservar}
                alt='iconoObservar'
              />
            </Link>
          </div> */}

          <div className="flex justify-center items-center gap-3">
              {/* Llama a la función handleImageClick al hacer clic en la imagen */}
              <img
                src={iconoObservar}
                alt='iconoObservar'
                onClick={handleImageClick}
                className="cursor-pointer"
              />
          </div>
        </td>
      </tr>
    );
  };
  
  export default NombrePolicia;
  