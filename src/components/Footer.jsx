import { BsCalculator } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border overflow-x-hidden border-t-2  fixed bottom-0 left-0 w-full items-center h-20">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4">
          <div className="ml-5">
            <BsCalculator className="size-5 absolute mt-3 ml-20 text-green-900"/>
            <p className="absolute ml-14 mt-8 text-green-800 font-semibold"><span className="text-red-600 font-semibold">Calc</span>ulator</p>
          </div>
          <div className="ml-20">
            <FaRegMap className="size-5 absolute mt-3 ml-50 text-green-900"/>
             <p className="absolute ml-50 mt-8 text-green-800 font-semibold">Map</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
