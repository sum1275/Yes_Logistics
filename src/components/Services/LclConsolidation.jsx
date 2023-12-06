import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function LclConsolidation() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        LCL Consolidation
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <div className="w-[90%] h-auto flex flex-wrap justify-center ">
        <div className="w-96 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/lcl.png"
              alt="lcl Consolidation"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>

          <p className=" text-base text-gray-500">
            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics provides worldwide Less-Than-Container Load (LCL)
                services.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                LCL is suitable for customers with cargo insufficient for a Full
                Container Load (FCL).
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Cargo is individually packaged and grouped based on destination.
              </div>
            </div>
            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Compatibility with other cargo is ensured before grouping.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                The grouped cargo is transshipped to its final destination.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics facilitates the delivery and receipt of cargo
                globally.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                The company focuses on offering direct services to the USA and
                other sectors.
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LclConsolidation;
