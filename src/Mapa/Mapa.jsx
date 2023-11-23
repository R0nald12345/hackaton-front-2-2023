import GoogleMaps from 'simple-react-google-maps'

const Mapa = () => {
  return (
    <div>
        <GoogleMaps
            apiKey = {"AIzaSyAgJYJtIalXPGUMFsjqYvmxPSVUARIPG4A"}
            style= {{height: "500px", width: "500px"}}
            zoom= {10}
            center = {{
                lat: 9.433765,
                lng: -1.664428,
            }} 
        />
    </div>
  )
}

export default Mapa
