// import axios from 'axios'
// import toast from 'react-hot-toast'



// const config = {
//     duration: 3000,
//     position: "top-center",
//   };

// export const loginUser = async (carnet , contrasenia) => {
//     if (carnet.length > 3) {
//       if (contrasenia.length > 4) {
//         const dataUser = {
//             carnet,
//             contrasenia,
//         };
        
//         try {
//           const baseUrl = import.meta.env.VITE_API_POST_URL;
//           const url = baseUrl + "/auth/login";
//           const data = axios.post(url, dataUser);
//           const response = await toast.promise(data, {
//             loading: "loading",
//             success: "success",
//             error: "error",
//           });
  
//           console.log(response);
  
//           localStorage.setItem("token", response.data?.token);
//           localStorage.setItem("usuario", response.data?.data?.nombre);
//           localStorage.setItem("imagen", response.data?.data.imagen);
//           localStorage.setItem("cargo", response.data?.data.cargo);
//           localStorage.setItem("ci", response.data?.data.ci);
//           window.location.href = "/";
//         } catch (error) {
//           console.log(error);
//           const messageError = error.response?.data?.message;
//           toast.error(messageError, config);
//         }
//       } else {
//         toast.error("contraseña deberia tener al menos 5 caracteres", config);
//       }
//     } else {
//       toast.error("nombre muy corto", config);
//     }
//   };