import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";


const FuelCostCalc = () => {
  const [open1,setOpen1] = useState(false)
  const [open2,setOpen2] = useState(false)
  const [open3,setOpen3] = useState(false)
  const [open4,setOpen4] = useState(false)
  const [open5,setOpen5] = useState(false)
  const [open6,setOpen6] = useState(false)
  const [open7,setOpen7] = useState(false)
  return (
    <>
      <div className="bg-white border-2 relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-0 text-teal-600">
        <div>
            <h className="flex mb-3 pl-4 text-black font-semibold">Kampala Fuel Cost Calculator</h>
            <p className="text-left leading-6 text-sm text-gray-500 pl-4">
                FuelCalc is a free fuel cost calculator built for<br/> Kampala drivers. Enter any route or distance to instantly calculate your petrol or diesel cost, fuel<br/>
                consumption in litres, travel time and cost per<br/> kilometre. With live fuel prices from government<br/> APIs
                across NSW,QLD,VIC,SA,WA and TAS, plus<br/> 500+ vehicle presents with real-world L/100km <br/>
                figures, ypu get accurate trip cost estimates in <br/> seconds.<br/><br/>
                Whether you`re planning a road trip from Kampala<br/> to Guru, calculating
                your weekly commute<br/> cost, or comparing fuel expenses between<br/>
                vehicles, FuelCalc shows the total cost, distance,<br/>
                time and fuel needed - displayed on an <br/>
                interactive map with the actual driving route. 
            </p>
            <h className="flex mt-3 pl-4 text-black font-semibold">Frequently Asked Questions</h>
        </div>
        <div onClick={() => setOpen1(!open1)} className="flex border-b-2 pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black font-semibold">How do i calculate fuel cost for a trip</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open1? "rotate-180": ""}`}/>
        </div>
        <div onClick={() => setOpen2(!open2)} className="flex border-b-2  pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black font-semibold">What does L/100km mean?</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open2? "rotate-180": ""}`}/>
        </div>
        <div onClick={() => setOpen3(!open3)} className="flex border-b-2  pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black text-left font-semibold">How much does fuel cost per km in<br/>Kampala</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open3? "rotate-180": ""}`}/>
        </div>
        <div onClick={() => setOpen4(!open4)} className="flex border-b-2  pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black text-left font-semibold">How are fuel prices in the calculator<br/>determined?</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open4? "rotate-180": ""}`}/>
        </div>
        <div onClick={() => setOpen5(!open5)} className="flex border-b-2  pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black text-left font-semibold">What is th average fuel consumption<br/> of Kampala cars?</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open5? "rotate-180": ""}`}/>
        </div>
        <div onClick={() => setOpen6(!open6)} className="flex border-b-2  pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black text-left font-semibold">Can i calculate weekly or monthly fuel<br/>costs?</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open6? "rotate-180": ""}`}/>
        </div>
        <div onClick={() => setOpen7(!open7)} className="flex border-b-2  pb-4 pt-4 border-gray-300 pl-4 justify-between font-semibold text-sm cursor-pointer">
          <h className="text-black text-left font-semibold">How accurate is the route distance and <br/> travel time?</h>
          <IoIosArrowDown className={`size-5 right-3 text-gray-400 top-3 transition-transform duration-500 ${open7? "rotate-180": ""}`}/>
        </div>
        <div className="border-b-2 pb-4 text-gray-400 pl-4 mb-4">
          <h className="text-black flex mt-4 font-bold">Diesel Cost Calculator</h>
          <p className="text-gray-500 mt-4 leading-6 text-sm text-left">FuelCalc works as a diesel calculator too.<br/>
          Select "Diesel" from the fuel type selector above<br/>
          to calculate trip costs using current Kampala<br/>
          diesel prices. With diesel averaging around<br/>
          $2.72/L nationally, a typical dual-cab ute(1o-12L/100km)<br/>
          costs 277-33 cents per kilometre significantly more than a petrol equivalent.<br/><br/>
          For fleet  operators and tradies running diesel<br/>
          vehicles, FuelCalc can help estimate daily,<br/>
          weekly and monthly fuel budgets. Compare<br/>
          <span>diesel vs petrol running costs</span> or check current<br/>
          diesel prices for your region below.</p>
        </div>
        <div className="mb-4 ml-4">
          <div className="flex relative text-left">
            <h className="text-sm text-black font-semibold">Popular Kampala Road<br/>Trips</h>
            <div className="absolute text-xs right-2 flex">
              <p>View all routes</p>
              <GoArrowRight className="mt-1 ml-2"/>
            </div>
          </div>
          <p className="text-left text-gray-500 text-sm leading-5">Dedicated calculator pages for the most-searched<br/>
          Kampala road trips - each with live state fuel<br/>
          prices ,vehicles comparisons and recommended fuel<br/> stops.</p>
        </div>
        <div className="border-b-2 text-gray-400 mb-4">
          <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Kampala to Jinja</h>
          <p className="absolute right-3 text-gray-400 text-xs">97.2 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Kampala to Mbale</h>
          <p className="absolute right-3 text-gray-400 text-xs">240 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Kasese to Hoima</h>
          <p className="absolute right-3 text-gray-400 text-xs">2771 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Wakiso to Kampala</h>
          <p className="absolute right-3 text-gray-400 text-xs">20 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Kampala to Masaka</h>
          <p className="absolute right-3 text-gray-400 text-xs">136 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Kawempe to Bombo</h>
          <p className="absolute right-3 text-gray-400 text-xs">9.1 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Jinja to Fort Portal</h>
          <p className="absolute right-3 text-gray-400 text-xs">392 km</p>
        </div>
        <div className="bg-white border-2 flex relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-black font-medium text-sm">
          <h>Mityana to Mbarara</h>
          <p className="absolute right-3 text-gray-400 text-xs">257 km</p>
        </div>
        </div>
        <div className="text-sm ml-5 font-medium">
          <h className="flex text-black font-semibold">Fuel Calculator by State</h>
          <div className="grid grid-cols-2">
            <div className="mt-4 mr-4 flex flex-col">
              <h className="bg-white border-2  border-gray-300 p-1   shadow-sm rounded-3xl text-teal-600">Kampala Calculator</h><br/>
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Mukono Calculator</h><br/>
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Jinja Calculator</h><br/>
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Wakiso Calculator</h><br/>
            </div>
            <div className="mt-4 ml-4 flex flex-col">
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Gulu Calculator</h><br/>
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Arua Calculator</h><br/>
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Kasese Calculator</h><br/>
              <h className="bg-white border-2 border-gray-300 p-1   shadow-sm rounded-3xl  text-teal-600">Hoima Calculator</h><br/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default FuelCostCalc
