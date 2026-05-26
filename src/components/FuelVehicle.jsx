import { IoIosArrowDown } from "react-icons/io";
import { LuFuel } from "react-icons/lu"
import { FaCarSide,FaCheck} from "react-icons/fa";
import { useState } from "react";
import { GoDash } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { LiaToggleOnSolid,LiaToggleOffSolid } from "react-icons/lia";
import { PiInfoLight } from "react-icons/pi"

const FuelVehicle = () => {
  const [costM,setCostM] = useState("Just Me")
  const [passenger,setPassenger] = useState(1)
  const [open,setOpen] = useState(false)
  const [clicked,setClicked] = useState("")
  const [selected,setSelected] = useState("ACT")
  const [see,SetSee] = useState(false)
  const states = ["QLD","NSW","VIC","SA","WA","TAS","NT","ACT"]
  const [fuelPrice,setFuelPrice] = useState(0)
  const [button,SetButton] = useState("")
  const [toggle,setToggle] = useState(true)

  const splitCost = ()=> {
    setCostM(passenger - 1 + '- split cost')
    setPassenger((prev)=>{
      const newPassenger = prev - 1
      if(newPassenger===1){
        setCostM("Just Me")
      }
      return newPassenger
    })
  }

  const splitCost2 = ()=>{
    setPassenger(prev=>(prev<20? prev+1:prev))
    return(setCostM(passenger + 1 + '- split cost'))
  }


  const changeMe = ()=> {
    setToggle(false)
  }
  const backChangeMe = ()=>{
    setToggle(true)
  }
  const handle1 = ()=>{
    setClicked("ULP")
    setFuelPrice(258)
    SetButton("ULP")
  }
  const handle2 =()=>{
    setClicked("E10")
    setFuelPrice(230.0)
    SetButton("E10")
  }
  const handle3 =()=>{
    setClicked("P95")
    setFuelPrice(272.0)
    SetButton("P95")
  }
  const handle4 =()=>{
    setClicked("P98")
    setFuelPrice(280.0)
    SetButton("P8")
  }
  const handle5 =()=>{
    setClicked("Diesel")
    setFuelPrice(290.0)
    SetButton("Diesel")
  }
  const handle6 =()=>{
    setClicked("EV")
    setFuelPrice(0.33)
    SetButton("EV")
  }

  return (
    <>
      <div>
        <div className="bg-white border-2 relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 text-teal-600">
          <div onClick={() => setOpen(!open)} className="flex justify-between text-gray-400 font-semibold text-sm cursor-pointer">
            <h class="inline-flex"> <span><LuFuel className="size-4 mr-2 mt-1"/></span>Vehicle & Fuel</h>
            <IoIosArrowDown className={`transition-transform duration-300 ${open? "rotate-180": ""}`}/>
          </div>
          <p className="flex text-gray-400 text-sm">Custom vehicle.ULP.$2.33/L.8L/100km</p>
          <div className={`overflow-hidden transition-all duration-300 ${open? "max-h-300 mt-4":"max-h-0"}`}>
            <div className="bg-white border-2 border-gray-300 p-3 flex justify-between shadow-sm rounded-3xl m-5 text-teal-600">
            <div className=" mt-4 ml-2">
              <FaCarSide />
            </div>
            <h className="text-sm text-gray-400">Vehicle<br/><span className="font-bold text-black">Custom vehicle</span><br/>8 L/100km.60L tank</h>
            <IoIosArrowDown className="text-sm text-gray-400"/>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-500 font-medium mb-3 text-xs border-2 border-gray-300 bg-gray-300 rounded-3xl p-3">
              <h className="flex">Fuel economy</h><br/>
              <input type="number" placeholder="number" className="pl-1 border-none"/>
              <span>L/100km</span>
            </div>
            <div className="text-gray-500 font-medium mb-3 text-xs border-2 border-gray-300 bg-gray-300 rounded-3xl p-3">
              <h className="flex">Tank size</h><br/>
              <input type="number" placeholder="number" className="pl-1 border-none"/>
              <span>L</span>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-300 p-3 flex-col shadow-sm rounded-3xl m-5 text-teal-600">
            <h className="flex text-gray-400">Fuel type</h>
            <div className="flex mt-2 text-gray-500 font-medium text-sm">
              <button onClick={handle1} className={`border-0 p-1 rounded-b-lg rounded-t-lg mr-2 ${clicked==="ULP"? "bg-green-700 text-white":"bg-gray-300"}`}>ULP</button>
              <button onClick={handle2} className={`border-0 p-1 rounded-b-lg rounded-t-lg mr-2 ${clicked==="E10"? "bg-green-400 text-white":"bg-gray-300"}`}>E10</button>
              <button onClick={handle3} className={`border-0 p-1 rounded-b-lg rounded-t-lg mr-2 ${clicked==="P95"? "bg-blue-700 text-white":"bg-gray-300"}`}>P95</button>
              <button onClick={handle4} className={`border-0 p-1 rounded-b-lg rounded-t-lg mr-2 ${clicked==="P98"? "bg-pink-700 text-white":"bg-gray-300"}`}>P98</button>
              <button onClick={handle5} className={`border-0 p-1 rounded-b-lg rounded-t-lg mr-2 ${clicked==="Diesel"? "bg-black text-white":"bg-gray-300"}`}>Diesel</button>
              <button onClick={handle6} className={`border-0 p-1 rounded-b-lg rounded-t-lg mr-2 ${clicked==="EV"? "bg-sky-600 text-white":"bg-gray-300"}`}>EV</button>
            </div>
            <p className="mt-2 flex font-normal text-xs text-gray-500">Hover for full name.affects price lookup</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-3 flex-col shadow-sm rounded-3xl m-5 text-teal-600">
            {see && (<div className=" text-white font-mono absolute bottom-13  ml-50 bg-gray-800/95 p-6 rounded-3xl pr-30">
                {states.map((state)=>(
                  <button key={state} onClick={()=> {
                    setSelected(state);
                    SetSee(false)
                  }}
                  className="flex items-center gap-4 w-full">{selected=== state?(<FaCheck className="size-3" />):("")}{state}</button>
                ))}
              </div>)}
            <h className="flex text-gray-400">Fuel Price</h>
            <div className="flex justify-between text-gray-400">
              <button onClick={()=>setFuelPrice(prev =>prev - 0.1)} className="border-0 bg-gray-300 text-gray-900 p-3 rounded-b-lg rounded-t-lg mr-3 mt-2" type="button"><GoDash /></button>
              <p className="text-black font-bold text-lg pt-3">{fuelPrice.toFixed(1)}<span className="ml-3 text-xs text-gray-400">cents/litre</span></p>
              <button onClick={()=>setFuelPrice(prev => prev + 0.1)} className="border-0 bg-gray-300 text-gray-900 p-3 rounded-b-lg rounded-t-lg ml-3 mt-2" type="button"><GoPlus /></button>
            </div>
            <p className="text-gray-400 font-semibold text-sm pt-2">=$<span className="mr-2">{(fuelPrice/100)}</span>per litre</p>
            <div className="flex justify-center">
              <p className="text-gray-400 font-semibold pt-2">Average<span className="ml-2 text-xs text-gray-950">{button}</span></p>
              <button onClick={()=> SetSee(!see)} className=" ml-3 border-0 bg-gray-300 text-gray-700 p-1 pr-3 rounded-b-lg rounded-t-lg mt-2 text-xs font-semibold">{selected}</button> 
            </div>
          </div>
          <div className="bg-white border-2 border-gray-300 p-3 flex-col shadow-sm rounded-3xl m-5 text-teal-600">
              {toggle && (
                <>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="flex text-black font-medium text-x1">One way</h1>
                      <h2 className="flex text-gray-500 text-sm font-semibold">Single Direction</h2>
                      <p className="text-gray-400 flex text-xs">Toggle for return trip</p>
                    </div>
                    <LiaToggleOffSolid onClick={changeMe} className="size-10 transform transition-all duration-75 cursor-pointer"/>
                    
                  </div>
                </>
              )}

            {!toggle && (
              <>
                <div className="flex justify-between">
                 <div>
                    <h1 className="flex text-black font-medium text-x1">Return trip</h1>
                    <h2 className="flex text-gray-500 text-sm font-semibold">Distance doubled</h2>
                    <p className="text-gray-400 flex text-xs">Toggle for return trip</p>
                  </div>
                    <LiaToggleOnSolid onClick={backChangeMe} className="size-10 transform transition-all duration-75 cursor-pointer"/>
                </div>
              </>
            )}
          </div>
          <div className="bg-white border-2 border-gray-300 p-3 flex-col shadow-sm rounded-3xl m-5 text-teal-600">
            <div className="flex justify-between relative">
              <div>
                <IoPeopleOutline className="size-5 absolute top-3" />
                <h className="ml-7 text-sm text-gray-400">Passengers</h>
                <p className="flex ml-7 text-sm text-gray-400">{costM}</p>
              </div>
              <div className="flex ">
                <button disabled={passenger<=1} onClick={splitCost} className="border-0 bg-gray-300 text-gray-900 p-3 rounded-b-lg rounded-t-lg mr-3 mt-2" type="button"><GoDash /></button>
                <p className="mr-7 mt-3 size-2 text-2xl text-black font-bold">{passenger}</p>
                <button disabled={passenger>=20} onClick={splitCost2}  className="border-0 bg-gray-300 text-gray-900 p-3 rounded-b-lg rounded-t-lg mr-3 mt-2" type="button"><GoPlus /></button>
              </div>
            </div>
            <h className="flex text-gray-400 text-xs">Split the fuel cost</h>
          </div>
        </div>
        </div>
        <div className="relative bg-transparent border-2 border-dotted p-4 flex-col shadow-sm rounded-3xl m-5 text-gray-400">
          <PiInfoLight className="absolute top-5" />
          <h className="flex text-sm ml-7">Enter a route or distance above to see your trip<br />estimate</h>
        </div>
      </div>
    </>
  )
}

export default FuelVehicle
