import React, { useState } from "react";

export default function About() {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleParagraphVisibility = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  return (
    <div className="w-full flex flex-wrap flex-col items-center text-center p-10">
      
      <p className=" text-blue-800  font-bold text-3xl md:text-4xl text-center">
        About Us
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
 <div className="py-4 bg-white">
      <div className="container m-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="space-y-8 md:flex md:gap-8 lg:items-center lg:gap-12">
          {/* Image and Play button section */}
          <div className="md:w-6/12 lg:w-6/12 md:order-last lg:order-first">
            <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1601654717399-7486d5ebedca?auto=format&fit=crop&w=1018&h=584"
                className="img-fluid w-full h-auto md:w-96 lg:w-full md:h-96 lg:h-full rounded-md shadow-lg transition-transform transform hover:scale-105"
                alt=""
              />
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox play-btn"
              ></a>
            </div>
          </div>

          {/* About Us content */}
          <div className="md:w-6/12 lg:w-6/12">
            <div className="md:pl-8">
             

              <p className="text-lg leading-7">
                {showFullParagraph ? (
                  <>
                    Welcome to{" "}
                    <span className="font-bold text-orange-700">
                      Yes Logistics
                    </span>
                    , a young and dynamic company dedicated to providing
                    tailor-made logistics services to importers and exporters.
                    Specializing in freight forwarding, custom clearing, and
                    local supply chain requirements, we operate under one roof,
                    ensuring a seamless and efficient service. With experience
                    on both sides of the table, we have gained valuable insights
                    into the requirements and sensitivities of various
                    situations. This understanding helps us build confidence
                    among our clients, making it a key asset. In the years to
                    come, success for us is not only about efficiency but also a
                    commitment to working reasonably for our customers. In
                    today's business landscape, where the cost of logistics
                    plays a vital role in product costs and sales, relying
                    solely on in-house resource efficiency is not enough. The
                    same value must be adopted by logistics partners to stay
                    ahead in the race. With the aim of being your partner in
                    efficient resource utilization, we have embraced our motto –{" "}
                    <span className="font-semibold text-orange-700">
                      Yours Logistics Manager
                    </span>
                    .
                  </>
                ) : (
                  <>
                    Welcome to{" "}
                    <span className="font-bold text-orange-700">
                      Yes Logistics
                    </span>
                    , a young and dynamic company dedicated to providing
                    tailor-made logistics services.{" "}
                    <button
                      className="text-blue-600 hover:underline focus:outline-none"
                      onClick={toggleParagraphVisibility}
                    >
                      Read More
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
