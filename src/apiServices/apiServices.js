import axios from 'axios'



export const obtenerDatos = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const url = baseUrl + "/publications";
      const datos = await axios.get(url);
      return datos.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  