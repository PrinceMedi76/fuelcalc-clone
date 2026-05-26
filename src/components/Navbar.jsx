
import { useState } from "react";
import {FaBars,FaRegMoon, FaTimes} from "react-icons/fa"
import { LuFuel } from "react-icons/lu"

const Navbar = () => {
  const [sidebar,setSidebar] = useState(false)

  return (
    <>
      <nav className="bg-green-700 text-white relative p-6">
        <div className="flex top-5 left-5 gap-3">
            <LuFuel className="size-6"/>
            <h1 className=" font-extrabold text-amber-50" >Fuel
                <span className="text-red-600">Calc</span></h1>
        </div>
      
      <div className="absolute top-7 right-20">
        <FaRegMoon />
      </div>
      <div className="absolute top-7 right-6" onClick={()=> setSidebar(!sidebar)}>
        {sidebar? <FaTimes/>:<FaBars/>}
      </div>
    </nav>
    {sidebar && (
      <div className="bg-emerald-950 pl-6 pt-6 pb-6 font-sans mt-0 fixed top-18 left-0 h-screen w-227.5 z-40">
      <div className="mr-0 flex flex-col items-start">
        <h1 className="pb-2">Fuel Economy</h1>
        <h1 className="pb-2">My Fuel Log</h1>
        <h1 className="pb-2">Wholesale Prices</h1>
        <div className="ml-1 m-3">
          <ul className="font-medium flex flex-col items-start border-l pl-6">
          <li>Why Prices Changed</li>
          <li>market Insights</li>
          <li>kampala</li>
          <li>Mukono</li>
          <li>Jinja</li>
          <li>Wakiso</li>
          <li>Gulu</li>
          <li>Arua</li>
          <li>Kasese</li>
          <li>Hoima</li>
        </ul>
        </div>
      <h1 className="pb-2">Routes</h1>
      <h1 className="pb-2">Blog</h1>
      <h1 >Shop<span className="font-bold text-xs rounded-full border-0 bg-red-600 decoration-amber-50 p-1 ml-2">NEW</span></h1>
      </div>
    </div>
    )}
    </>
    
  )
}

export default Navbar
