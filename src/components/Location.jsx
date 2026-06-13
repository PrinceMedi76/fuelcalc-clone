import { IoIosAdd } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Location = () => {
  const [activeTab,setActiveTab] = useState("manual")
  const [startLocation,setStartLocation] = useState("")
  const [endLocation,setEndLocation] = useState("")
  const navigate = useNavigate()
  const [coordinates,setCoordinates] = useState(null)

  const getCurrentLocation = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        setStartLocation(`${position.coords.latitude},${position.coords.longitude}`)
      },()=>{
        alert("Unable to fetch current location. Please allow location access and try again.")
      })
    }
  }


  const getCoordinates = async (location)=>{
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
    const data = await response.json();
    if(data.length > 0){
      return [
        parseFloat(data[0].lat),
        parseFloat(data[0].lon),
      ]
    }
    return null;
  };
    
  const handleRoute = async () =>{
    const start = await getCoordinates(startLocation)
    const end = await getCoordinates(endLocation)
    if(start || end){
      setCoordinates({
        start,
        end
      })
      navigate("/map",{
        state: {
          coordinates: {
            start,
            end,
          }
        }
      })
    }else{
      alert(" Please check the locations and try again.")
    }
  }

  return (
    <>
      <div className="bg-white border-2 mt-25 border-gray-300 p-2  shadow-sm rounded-3xl m-3 mb-1 text-teal-600">
        <div className="bg-gray-300 rounded-xl m-2 p-2 flex ">
            <button onClick={()=> setActiveTab("route")} className={`rounded-xl font-semibold p-2 pr-10 pl-13 mr-7
              transition ${activeTab=== "route"? "bg-white shadow text-black":"text-gray-500"}`}>Route A-B</button>
            <button onClick={()=> setActiveTab("manual")} className={`rounded-xl font-semibold p-2 pr-9 pl-10 mr-2 
              transition ${activeTab==="manual"? "bg-white shadow text-black":"text-gray-500"}`}>Manual Distance</button>
        </div>
      {activeTab === "route" && (
        <>
         <div className="border mb-3 rounded-2xl p-2 items-start gap-3 w-full max-w-2xl relative">
            <CiLocationOn className="text-2xl flex absolute mt-4" />
            <div className="flex flex-col items-start ml-20">
                <label className="block">Starting location</label><br/>
            <input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value)} placeholder="city or address" className="items-center shadow-olive-800 pl-3 max-w-md outline-1"/>
            <button className="bg-blue-500 text-white p-1 rounded-xl text-xs m-2" type="submit" onClick={getCurrentLocation}>
              Use Current Location
            </button>
            </div>
        </div>
        <div className="border mb-3 rounded-2xl p-2 items-start gap-3 w-full max-w-2xl relative">
            <CiLocationOn className="text-2xl flex absolute mt-4"/>
           <div className="flex flex-col items-start ml-20">
             <label>Destination</label><br/>
            <input type="text" value={endLocation} onChange={(e) => setEndLocation(e.target.value)} placeholder="city or address" className="items-center shadow-olive-800 pl-2" />
           </div>
        </div>
        <div>
            <button onClick={handleRoute} className="border-dashed border rounded-2xl pl-22 pr-22 pt-2 pb-2 justify-center text-sm flex  sm:w-64 m-4 ml-10 sm:ml-5 text-center">
                <IoIosAdd className="size-5 "/>handle Route
            </button>
        </div>
        </>
      )}
      {activeTab === "manual" && (
        <>
          <div>
            <div className="rounded-3xl bg-gray-100 p-5 border border-gray-300 shadow-amber-100">
              <p className="mb-3 text-lg text-gray-500 flex">Distance</p>
              <div className="flex items-center justify-between">
                <input type="number" className="text-black outline-none sm:w-fit bg-transparent text-sm font-semibold" placeholder="Enter distance in km"/>
                <span className="text text-gray-500 sm:ml-1">km</span>
              </div>
            </div>
            <p className="text-gray-500 text-lg mt-5 text-center">know the Distance already? Enter it directly - no route lookup needed.</p>
          </div>
        </>
      )}
      </div>
    </>
  )
}

export default Location
