import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {
  return (
        <MapContainer
        center={[25.2048,55.2708]}
        zoom={13}
        scrollWheelZoom={true}
        className='h-full w-full  '>
            <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[25.2048,55.27708]}>
                <Popup>
                    Dubai Location
                </Popup>
            </Marker>
        </MapContainer>
  )
}

export default Map
