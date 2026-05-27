import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Location from './components/Location.jsx'
import FuelVehicle from './components/FuelVehicle.jsx'
import Footer from './components/Footer.jsx'
import Log from './components/Log.jsx'
import FuelPriceAlert from './components/FuelPriceAlert.jsx'
import FuelCostCalc from './components/FuelCostCalc.jsx'
import InsideFooter from './components/InsideFooter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Navbar />
      <Location />
      <FuelVehicle />
      <Log />
      <FuelPriceAlert />
      <FuelCostCalc />
      <InsideFooter />
      <Footer />
    </>
  </StrictMode>,
)
