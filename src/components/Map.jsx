import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import "leaflet-routing-machine"
import RoutingMachine from './RoutingMachine'
import { useLocation } from "react-router-dom"
import L from 'leaflet'
import markerIcon from '../images/location.png'
import "leaflet/dist/leaflet.css"


const Map = () => {
  const location = useLocation();
  const { coordinates } = location.state || {};

  const customIcon = new L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
       <>
          <MapContainer
        center={[coordinates.start[0], coordinates.start[1]]}
        zoom={13}
        scrollWheelZoom={true}
        className='h-full w-full'>
            <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <>
                   <Marker position={coordinates.start} icon={customIcon}>
                <Popup>
                    Starting Location
                </Popup>
            </Marker>
            <Marker position={coordinates.end} icon={customIcon}>
                <Popup>
                    end Location
                </Popup>
            </Marker>
                </>
            
                <RoutingMachine start={coordinates.start} end={coordinates.end}/>
        </MapContainer>
       </>
        
  )
}

export default Map
