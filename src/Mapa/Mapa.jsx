// import GoogleMaps, { Marker } from 'simple-react-google-maps';



// const Mapa = ({ latitude, longitude }) => {
//   return (
//     <div className='w-full flex justify-center items-center'>
//       <GoogleMaps
//         apiKey={"AIzaSyAgJYJtIalXPGUMFsjqYvmxPSVUARIPG4A"}
//         style={{ height: "500px", width: "800px" }}
//         zoom={10}
//         center={{
//           // lat: latitude,
//           // lng: longitude,
//           lat: -17.77647711658589,
//           lng: -63.195227430692064,
//         }}
//       >
   
        
//         <Marker
//           lat={latitude}
//           lng={longitude}
//           label="Mi Ubicación"
//         />
          
//       </GoogleMaps>
//     </div>
//   );
// };

// export default Mapa;


//-----------------------------------



// import GoogleMapReact, { Marker } from 'google-map-react';

// const Mapa = ({ latitude, longitude }) => {
//   return (
//     <div className='w-full flex justify-center items-center'>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyAgJYJtIalXPGUMFsjqYvmxPSVUARIPG4A" }}
//         defaultCenter={{
//           lat: -17.77647711658589,
//           lng: -63.195227430692064,
//         }}
//         defaultZoom={10}
//       >
//         <Marker
//           lat={latitude}
//           lng={longitude}
//           text="Mi Ubicación"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Mapa;

import React, { useEffect, useState } from 'react';

const Mapa = ({ latitude,longitude }, apiKey="AIzaSyAgJYJtIalXPGUMFsjqYvmxPSVUARIPG4A") => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Cargar el mapa después de que el componente se monte
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAgJYJtIalXPGUMFsjqYvmxPSVUARIPG4A&callback=initMap`;
    googleMapScript.async = true;
    document.head.appendChild(googleMapScript);

    // Definir la función initMap globalmente
    window.initMap = initMap;

    // Limpiar el componente antes de desmontarlo
    return () => {
      delete window.initMap;
      document.head.removeChild(googleMapScript);
    };
  }, [apiKey]); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    // Añadir marcadores cuando el mapa y los markers estén disponibles
    if (map && markers.length > 0) {
      markers.forEach(marker => {
        new window.google.maps.Marker({
          position: marker.position,
          map: map,
          icon: marker.icon,
        });
      });
    }
  }, [map, markers]);

  
  const initMap = () => {
    const newMap = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: { lat: latitude, lng: longitude},
    });

    setMap(newMap);

    const newMarkers = [
      {
        position: { lat: latitude, lng: longitude },
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      },
      // Puedes agregar más marcadores según sea necesario
    ];

    setMarkers(newMarkers);
  };

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default Mapa;
