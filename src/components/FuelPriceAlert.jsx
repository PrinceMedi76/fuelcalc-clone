import { useState } from "react"
import { MdCircleNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const FuelPriceAlert = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
        <div onClick={() => setOpen(!open)} className="bg-white border-2 relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-teal-600">
            <MdCircleNotifications className="absolute left-5 top-2 text-orange-400 size-10 mr-2 mt-1" />
            <div>
                <h1 className="mr-50 text-gray-600 font-semibold">Fuel Price Alert</h1>
                <p className="mr-37 text-gray-400 text-xs">Get notified when prices drop</p>
                <IoIosArrowDown className={`absolute right-3 text-gray-400 top-3 transition-transform duration-500 ${open? "rotate-180": ""}`}/>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${open? "max-h-300 mt-4 border-gray-300 border-t-2 w-full h-full":"max-h-0"}`}>

            </div>
        </div>
    </>
  )
}

export default FuelPriceAlert
