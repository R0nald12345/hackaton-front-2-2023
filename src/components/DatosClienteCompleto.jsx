import { useParams, useNavigate } from "react-router-dom"
import {useEffect,useState} from 'react'
import { obtenerDatos } from '../apiServices/apiServices';
import Mapa from "../Mapa/Mapa";


const DatosClienteCompleto = () => {

  const[foto,setFoto]= useState("");
  const[descripcion,setDescripcion]= useState("");
  const[titulo,setTitulo]= useState("");
  const[tipoRobo,setTipoRobo]= useState(""); 
  const[latitude,setLatitude]= useState(0);
  const[longitude,setlogitude]= useState(0);

  const {id} =  useParams();

  
  const[datos,setDatos] =useState([])

  useEffect(() => {
    const getDatos = async () => {
      try {
        const data = await obtenerDatos();
        // Filtrar los datos según el ID
        const datoSeleccionado = data.find((dato) => dato.id === Number(id));

        // Actualizar los estados con los datos filtrados
        if (datoSeleccionado) {
          setTitulo(datoSeleccionado.title);
          setFoto(datoSeleccionado.image)
          setDescripcion(datoSeleccionado.description);
          setTipoRobo(datoSeleccionado.idType);
          setLatitude(datoSeleccionado.latitude);
          setlogitude(datoSeleccionado.longitude);
          // ... actualiza los demás estados con los campos relevantes
        }

        setDatos(data);
      } catch {
        console.log('error');
      }
    };

    getDatos();
  }, [id]);

  console.log(datos);

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
        <form className="w-full p-7 shadow-lg rounded-lg">

            <h2 className="font-extrabold text-3xl text-center mb-5">
              {titulo}
            </h2>

            <section className="md:flex md:gap-8">
              
              <div className="bg-slate-500 md:w-1/4 rounded-lg ">
                <img 
                  src={foto}
                  alt="foto"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>


              <div className="md:w-3/4">
                <p className="font-extrabold mb-1 mt-3 md:mt-0">Descripcion</p>
                <textarea 
                  className="w-full rounded-lg p-2 border-2 border-black"
                  defaultValue={descripcion}
                />
                <p className="font-extrabold mt-3 mb-1">Tipo de robo</p>
                <p className="rounded-lg p-2 border-2 border-black">{tipoRobo}</p>
              </div>

            </section>

            <section className="mt-3">
              <p className="font-extrabold mb-2">Lugar de la Denuncia</p>
              <div className="w-full rounded-lg mb-5 "> 
                <Mapa 
                  latitude = {latitude}
                  longitude= {longitude}
                />
              </div>
            </section>

              <button 
                  onClick={()=>navigate('/inicio/principal')}
                  className="uppercase w-full font-extrabold text-center bg-green-800 text-white rounded-lg py-4">
                    
                  Regresar
              </button>

        </form>
    </div>
  )
}

export default DatosClienteCompleto