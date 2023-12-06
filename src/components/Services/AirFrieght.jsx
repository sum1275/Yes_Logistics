import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AirFrieght() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        Air Frieght
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <div className="w-[90%] h-auto flex flex-wrap justify-center ">
        <div className="w-96 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/flightfrieght.png"
              alt=" Air Frieght"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>

          <p className=" text-base text-gray-500">
            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics provides comprehensive Airfreight services,
                connecting customers to worldwide origins.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Our Airfreight Services cover freight booking for both inbound
                and outbound cargo, adhering to various Inco terms like DDP,
                DDU, Ex. Works, etc.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
               <i className="bi bi-check-circle"></i>

              </div>
              <div>
                We specialize in Air Charter services and efficient handling of
                Project Cargo to ensure smooth and reliable transportation.
              </div>
            </div>
            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics facilitates Cross Trade bookings, simplifying
                logistics for shipments between different countries.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Our expertise extends to handling shipments for exhibitions and
                trade fairs, offering tailored solutions for event-related
                logistics.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
             <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                With a focus on excellence, we ensure seamless Airfreight
                services for a diverse range of cargo and shipping needs.
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AirFrieght;
