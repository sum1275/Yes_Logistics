import React from "react";

function ProjectCargo() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        Project Cargo
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <div className="w-[90%] h-auto flex flex-wrap justify-center ">
        <div className="w-96 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/projectcargo.png"
              alt=" ProjectCargo"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>

          <p className=" text-base text-gray-500">
            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics specializes in handling Odd Dimensional (ODC)
                cargo, offering complete logistics solutions.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                We provide freight booking services for special cargo, including
                Odd Dimensional (ODC) in open tops and flat racks.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Our expertise extends to break-bulk cargo, with seamless freight
                booking and customs broking services.
              </div>
            </div>
            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Yes Logistics ensures the safe transportation of heavy lifts and
                ODC cargoes from customer warehouses to ports.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                We excel in stuffing, lashing, and choking cargo according to
                port, liner, and customer requirements.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                Our services include door-to-door deliveries, connecting
                shippers' warehouses to consignees' destinations through our
                global network.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                We offer comprehensive customs broking for special cargoes,
                heavy lifts, and break-bulk cargo, ensuring smooth international
                logistics.
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCargo;
