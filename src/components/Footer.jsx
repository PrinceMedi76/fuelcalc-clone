import { BsCalculator } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border border-t-2  fixed bottom-0 left-0 w-227.5 justify-around items-center h-20">
      <div className="grid grid-col">
          <div>
            <BsCalculator className="size-5 absolute mt-3 ml-20 text-green-900"/>
          </div>
          <div>
            <p className="absolute ml-14 mt-8 text-green-800 font-semibold"><span className="text-red-600 font-semibold">Calc</span>ulator</p>
          </div>
          <div>
            <FaRegMap className="size-5 absolute mt-3 ml-100 text-green-900"/>
          </div>
          <div>
            <p className="absolute ml-98 mt-8 text-green-800 font-semibold">Map</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
