import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'leaflet/dist/leaflet.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BrowserRouter>
        
        <App/>
      </BrowserRouter> 
        
    </>
  </StrictMode>,
)
