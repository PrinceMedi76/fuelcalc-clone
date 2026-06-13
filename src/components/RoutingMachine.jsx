import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet' 

const RoutingMachine = ({ start, end }) => {
    const map = useMap();
    useEffect(() => {
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(start[0], start[1]),
                L.latLng(end[0], end[1]),
            ],
            createMarker: () => null,
            lineOptions: {
                styles: [{ color: 'blue', opacity: 0.7, weight: 6 }],
            },
            addWaypoints: false,
            fitSelectedRoutes: true,
            draggableWaypoints: false,
            show: false,
        }).addTo(map);
        return () => map.removeControl(routingControl);
        }, [map, start, end]);
    return null;
    }


export default RoutingMachine
