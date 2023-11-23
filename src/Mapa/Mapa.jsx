import GoogleMaps from 'simple-react-google-maps'

const Mapa = ({latitude,longitude}) => {
  return (
    <div className='w-full flex justify-center items-center'>
        <GoogleMaps
            apiKey = {"AIzaSyAgJYJtIalXPGUMFsjqYvmxPSVUARIPG4A"}
            style= {{height: "500px", width: "800px"}}
            zoom= {10}
            center = {{
                // lat: 9.433765,
                // lng: -1.664428,
                lat: latitude,
                lng: longitude,
            }} 
        />
    </div>
  )
}

export default Mapa
