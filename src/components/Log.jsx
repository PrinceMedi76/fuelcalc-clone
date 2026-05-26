import { LuFuel } from "react-icons/lu"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Log = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
      <div onClick={() => setOpen(!open)} className="bg-white border-2 relative border-gray-300 p-3   shadow-sm rounded-3xl m-5 mt-0 mb-5 text-teal-600">
        <LuFuel className=" absolute left-5 top-4 size-4 mr-2 mt-1"/>
        <div>
          <h1 className="text-sm text-gray-600 font-semibold">Log a Fill up</h1>
          <h2 className="text-xs text-gray-400">Enter receipt details to calculate your real economy</h2>
          <IoIosArrowDown className={`absolute right-3 text-gray-400 top-3 transition-transform duration-500 ${open? "rotate-180": ""}`}/>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${open? "max-h-300 mt-4 border-gray-300 border-t w-full h-full":"max-h-0"}`}>
          <h2 className="text-sm text-gray-400 mt-2">Enter receipt details to calculate your real economy</h2>
        </div>
      </div>
    </>
  )
}

export default Log
