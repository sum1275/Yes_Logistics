import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function CustomClearance() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        Custom Clearance
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <div className="w-[90%] h-auto flex flex-wrap justify-center ">
        <div className="w-96 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/customclear.png"
              alt=" Custom Clearance"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>

          <p className=" text-base text-gray-500">
            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics streamlines the customs clearance process for
                hassle-free imports and exports.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Navigate international trade smoothly with Yes Logistics, your
                customs clearance partner.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics simplifies customs procedures, ensuring compliance
                and timely clearance.
              </div>
            </div>
            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Experience efficient customs clearance with Yes Logistics,
                handling all necessary documentation.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Let Yes Logistics handle your customs clearance, ensuring
                adherence to import duties and regulations.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Seamlessly clear customs with Yes Logistics, providing
                comprehensive support for businesses and individuals.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics ensures a smooth customs clearance process,
                handling all aspects of declaration and compliance.
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomClearance;
