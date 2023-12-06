import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const images = [
    "https://images.pexels.com/photos/8243357/pexels-photo-8243357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "logistics-service.jpg",
    "storage-service.jpg",
    "warehousing-service.jpg",
    "airFrieght.png",
    // Add more image URLs as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12 relative shadow-lg p-4 mb-4">
            <Slider {...settings} className="slider-container pb-1">
              {images.map((image, index) => (
                <div key={index} className="slider-item">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto md:h-82 lg:h-96 object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              <span className="text-red-600">Y</span>
              <span className="text-blue-800">e</span>s Logistics: Your
              Logistics Manager
            </h2>
            <p className="mt-6 text-gray-700 leading-7">
              Welcome to{" "}
              <span className="font-bold text-orange-700">Yes Logistics</span>,
              where our commitment is to deliver well-defined and structured
              services to meet the diverse needs of our valued customers. Our
              comprehensive range of services includes
              <span className="font-semibold text-orange-700">
                {" "}
                Sea Freight
              </span>
              ,{" "}
              <span className="font-semibold text-orange-700">Air Freight</span>
              , and{" "}
              <span className="font-semibold text-orange-700">
                Project Cargo
              </span>
              . Each service is meticulously handled by a dedicated and
              efficient team within our offices, equipped with the requisite
              domain expertise to manage various shipments seamlessly. At{" "}
              <span className="font-bold text-orange-700">Yes Logistics</span>,
              we prioritize customer satisfaction, aiming to provide a
              delightful experience throughout our partnership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
