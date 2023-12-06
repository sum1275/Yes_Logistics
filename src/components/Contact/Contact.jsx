import React from "react";

export default function Contact() {
  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        Contact Us
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>

      <div className="mt-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg overflow-x-auto">
            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
              Get in touch:
            </h1>

            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  {/* ... SVG path data ... */}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-64 p-4 border border-gray-300 bg-white rounded-md shadow-md text-black-600">
                  <p className="mb-2">41/42 Printing House</p>
                  <p className="mb-2">28 D Police Court Lane</p>
                  <p>Fort, Mumbai 400001</p>
                </div>
              </div>

              <div className="flex items-center text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  {/* ... SVG path data ... */}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-64 p-4 border border-gray-300 bg-white rounded-md shadow-md text-black-600">
                  +91 7045564258
                </div>
              </div>

              <div className="flex items-center text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  {/* ... SVG path data ... */}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-64 p-4 border border-gray-300 bg-white rounded-md shadow-md text-black-600">
                  bdm01mum@yeslogistics.co.in
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg overflow-x-auto">
            <iframe
              title="Google Map"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.894251771908!2d72.83038127241532!3d18.936074317121548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dbeb72004f%3A0xf6229eb27a005524!2sPrinting%20House%2C%20Police%20Ct%20Ln%2C%20Borabazar%20Precinct%2C%20Ballard%20Estate%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1701796591118!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
