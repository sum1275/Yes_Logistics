import React from "react";
import { Link } from "react-router-dom";
function Services() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        Services
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <div className="w-[90%] h-auto flex flex-wrap justify-around">
        <div className="w-64 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="cargo.png"
              alt="Project Cargo"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold text-blue-800 hover:text-blue-500 transition-colors cursor-pointer">
          <Link to="/service/cargo" className="flex items-center">

            Project Cargo
            </Link>
          </p>
          <p className=" text-base text-gray-500">
            Yes Logistics . offers its customers a complete logistics and
            handling of all Odd Dimensional (ODC) and Machineries and offer all
            necessary allied activities to meet customers requirement.
          </p>
        </div>

        <div className="w-64 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/seaFrieght.png"
              alt="Project Cargo"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold text-blue-800 hover:text-blue-600/100 transition-colors cursor-pointer">
          <Link to="/service/sea" className="flex items-center">

            Sea Frieght
            </Link>
          </p>
          <p className=" text-base text-gray-500">
            Yes Logistics is one of the key players in Seafreight Services that
            offers its customers a wide range of services .
          </p>
        </div>

        <div className="w-64 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/airFrieght1.png"
              alt="Air Frieght"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold text-blue-800 hover:text-blue-600/100 transition-colors cursor-pointer">
          <Link to="/service/air" className="flex items-center">

            Air Frieght
            </Link>
          </p>
          <p className=" text-base text-gray-500">
            Yes Logistics offers its customers Airfreight services to Worldwide
            Origins.{" "}
          </p>
        </div>
      </div>

      <div className="w-[90%] h-auto flex flex-wrap justify-center">
        <div className="w-64 flex flex-col items-center mb-6 mx-4 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/lclConsolidation.png"
              alt="LCL Consolidation"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold text-blue-800 hover:text-blue-600/100 transition-colors cursor-pointer">
            <Link to="/service/lcl" className="flex items-center">
              LCL Consolidation
            </Link>
          </p>
          <p className="text-base text-gray-500">
            Yes Logistics streamlines cargo with LCL consolidation, seamlessly
            moving less than container load shipments from Inland Container
            Depots to a designated 'hub' terminal under customs seal.
          </p>
        </div>

        <div className="w-64 flex flex-col items-center mb-6 mx-4 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/custom.png"
              alt="Custom Clearance"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold text-blue-800 hover:text-blue-600/100 transition-colors cursor-pointer">
          <Link to="/service/clerance" className="flex items-center">

            Custom Clearance
            </Link>
          </p>
          <p className="text-base text-gray-500">
            Yes Logistics: Navigating seamless customs clearance for your
            business success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
