import {Routes, Route} from 'react-router-dom'
import MapPage from './components/MapPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Location from './components/Location'
import FuelCostCalc from './components/FuelCostCalc'
import FuelVehicle from './components/FuelVehicle'
import Log from './components/Log'
import InsideFooter from './components/InsideFooter'
import FuelPriceAlert from './components/FuelPriceAlert'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={
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
        }/>
        <Route path='/map' element={<>
        <Navbar/>
        <MapPage/>
        <Footer/>
        </>}/>
    </Routes>
  )
}

export default App
