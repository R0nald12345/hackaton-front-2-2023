
import { useParams, useNavigate } from "react-router-dom"
import {useEffect,useState} from 'react'
import { obtenerDatosPolicia } from '../apiServices/apiServices';
// import Mapa from "../Mapa/Mapa";


const DatoPoliciaCompleto = () => {

  const[nombre,setNombre]= useState("");
  const[numero,setNumero]= useState(""); 
  const[foto,setFoto]= useState("");
  const[direcion ,setDirecion]= useState("");
  const[latitude,setLatitude]= useState(0);
  const[longitude,setlogitude]= useState(0);
  const[responsable,setResponsable]= useState(0);


  const {id} =  useParams();

  
  const[datos,setDatos] =useState([])

  useEffect(() => {
    const getDatos = async () => {
      try {
        const data = await obtenerDatosPolicia();
        // Filtrar los datos según el ID
        const datoSeleccionado = data.find((dato) => dato.id === Number(id));

        // Actualizar los estados con los datos filtrados
        if (datoSeleccionado) {

          setNombre(datoSeleccionado.name);
          setNumero(datoSeleccionado.phone_number);
          setFoto(datoSeleccionado.photo_url);
          setDirecion(datoSeleccionado.direction);

          setlogitude(datoSeleccionado.longitude);
          setLatitude(datoSeleccionado.latitude);
          setResponsable(datoSeleccionado.responsible);
        }


        setDatos(data);
      } catch {
        console.log('error');
      }
    };

    getDatos();
  }, [id]);

  console.log(datos);
  console.log("NOmbre :", nombre);
  console.log("numero :", numero);
  console.log("responsible :", responsable);

  // const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
        <form className="w-full p-7 shadow-lg rounded-lg bg-slate-400">

            <h2 className="font-extrabold text-3xl text-center mb-5">
              {nombre}
            </h2>

            <section className="md:flex md:gap-8">
              
              <div className="bg-slate-500 md:w-1/4 rounded-lg ">
                {/* <img 
                  src={foto}
                  alt="foto"
                  className="w-full h-full object-cover rounded-lg"
                /> */}
                Foto
              </div>

  

              <section className="md:w-3/4">

                  <section className="md:flex gap-5">
                     <div className="md:w-3/4"> 
                        <p className="font-extrabold mb-2">Responsable</p>
                        <p className="rounded-lg  border-2 border-black mb-5">vsaasvr</p>
                     </div>

                     <div className="md:w-1/4 ">
                        <p className="font-extrabold mb-2">Numero</p>
                        <p className="rounded-lg  border-2 border-black">123456</p>
                     </div>

                  </section> 
                
                  <p className="font-extrabold mb-2">Direccion</p>
                  <p className="rounded-lg  border-2 border-black">Los Lotes</p>

              </section>

            </section>

            <section className="mt-3">
              <p className="font-extrabold mb-2">Lugar de la Denuncia</p>
              
              <div className="w-full rounded-lg bg-red-700 mb-4"> 
                {/* <Mapa 
                  latitude = {latitude}
                  // longitude= {longitude}
                /> */}
                Mapa
              </div>
            </section>

              <button 
                  // onClick={()=>navigate('control/policial')}
                  className="uppercase w-full font-extrabold text-center bg-green-800 text-white rounded-lg py-4">
                    
                  Regresar
              </button>

        </form>
    </div>
  )
}

export default DatoPoliciaCompleto