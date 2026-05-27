import { useState } from "react"
import { MdCircleNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const FuelPriceAlert = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
        <div onClick={() => setOpen(!open)} className="bg-white border-2 relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-teal-600 md:flex-row">
            <MdCircleNotifications className="absolute left-5 top-2 text-orange-400 size-10 mr-2 mt-1" />
            <div>
                <h1 className="mr-30 text-gray-600 font-semibold">Fuel Price Alert</h1>
                <p className="mr-18  text-gray-400 text-xs">Get notified when prices drop</p>
                <IoIosArrowDown className={`absolute right-3 text-gray-400 top-3 transition-transform duration-500 ${open? "rotate-180": ""}`}/>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${open? "max-h-full mt-2 border-gray-300 border-t-2 w-full":"max-h-0"}`}>
                <div className="flex flex-col m-4">
                    <label className="flex text-gray-400 text-sm">Email</label><br/>
                    <input className="rounded-2xl text-black border-2 border-gray-300 p-2" type="email" placeholder="your@email.com"/>
                </div>
                <div className="flex gap-2 m-4">
                    <div>
                        <label className="pr-30 text-sm text-gray-400">State</label><br/>
                        <input className="rounded-2xl w-40 text-black border-2 border-gray-300 p-2" type="text"/>
                    </div>
                    <div>
                        <label className="mr-25 text-sm text-gray-400">Fuel Type</label><br/>
                        <input className="rounded-2xl w-40 text-black border-2 border-gray-300 p-2" type="text"/>
                    </div>
                </div>
                <div className="text-left ml-4 text-gray-500 text-sm">
                    <h>Alert me when price drops below</h><br/>
                    <span>$<input className="rounded-2xl w-32 m-2 text-black border-2 border-gray-300 p-2" type="number" placeholder="2.00"/>/L</span>
                </div>
                <div>
                    <button className="rounded-2xl w-90 text-white bg-teal-800 border border-gray-300 p-2" type="submit">Set Up Alert</button>
                </div>
                <p className="text-xs mt-2 text-gray-500">Free. No spam. Unsubscribe anytime</p>
            </div>
        </div>
    </>
  )
}

export default FuelPriceAlert
