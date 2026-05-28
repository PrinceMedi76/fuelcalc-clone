import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Map from "../components/Map"

const MapPage = () => {
  return (
    <div className="flex flex-col-1 min-h-screen">
      <Navbar/>
      <div className="mt-20 relative m-0  z-0 flex-1"><Map/></div>
      <Footer/>
    </div>
  )
}

export default MapPage
