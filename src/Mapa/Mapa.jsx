

import React, { useEffect, useState } from 'react';

import marker from '../img/Tracking.png'

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

  -17.78288920100964, -63.182137684648815
  const initMap = () => {
    const newMap = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      // center: { lat: latitude, lng: longitude},
      center: { lat: -17.78288920100964, lng: -63.182137684648815},
    });

    setMap(newMap);

    const newMarkers = [
      {
        // position: { lat: latitude, lng: longitude },
        position: { lat: -17.78288920100964, lng: -63.182137684648815 },
        // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        icon: {marker}
      },
      // Puedes agregar más marcadores según sea necesario
    ];

    setMarkers(newMarkers);
  };

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default Mapa;
