import React from 'react'

function SeaFrieght() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
      Sea Frieght
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <div className="w-[90%] h-auto flex flex-wrap justify-center ">
        <div className="w-96 flex flex-col items-center mb-12 border-white border-2 border-opacity-25 rounded-xl p-2 shadow-md overflow-hidden">
          <div className="relative group">
            <img
              src="/frieghtship.jpg"
              alt=" Sea Frieght"
              className="w-full h-auto transition-transform transform scale-100 group-hover:scale-105 cursor-pointer"
            />
          </div>

          <p className=" text-base text-gray-500">
            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
              Yes Logistics facilitates seamless inbound and outbound cargo movement to and from various worldwide locations through efficient seafreight services.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
              The company manages shipments under diverse Inco terms such as DDP, DDU, Ex. Works, ensuring flexibility and compliance with international trade standards.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
              Yes Logistics specializes in handling shipments dedicated to exhibitions and trade fairs, ensuring timely and secure delivery of goods for these events.
              </div>
            </div>
            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
              The company is well-equipped to manage complex logistics scenarios, including the handling of projects, special equipment, and break-bulk cargo with precision and expertise.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
              Yes Logistics provides efficient cross-trade bookings, catering specifically to the needs of worldwide buyers and traders involved in international trade.
              </div>
            </div>

            <div className="text-base text-gray-500 flex items-start">
              <div className="flex-shrink-0 pr-2 text-blue-500">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
              With a commitment to excellence, Yes Logistics offers a comprehensive range of seafreight services, demonstrating its key role as a leading player in the logistics industry.
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
  )
}

export default SeaFrieght
