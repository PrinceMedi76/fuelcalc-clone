import { GoDash } from "react-icons/go";

const InsideFooter = () => {
  return (
    <>
        <div className="mb-20 justify-center bg-green-900 p-3">
            <div className="flex justify-center">
              <h className="text-xs text-gray-400">&copy; 2026 <span className="font-medium text-white">fuelcalc.com.ug</span></h>
              <p className="text-xs">Made By Medi Tech</p>
              <GoDash />
              <h className="text-xs text-gray-400">Estimates only. Fuel prices are indicative.</h>
            </div>
            <div className="text-gray-400 text-sm">
                <h className="mr-3">How to use</h>
                <h className="mr-3">Routes</h>
                <h className="mr-3">FAQ</h>
                <h className="mr-3">Privacy</h>
                <h className="mr-3">Terms</h>
                <h className="mr-3">Contact</h>
            </div>
        </div>
    </>
  )
}

export default InsideFooter
