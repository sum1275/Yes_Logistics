import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-6 lg:py-8">
          <div className="md:flex md:justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/y.png"
                  className="mr-3 h-16"
                  alt="Logo"
                />
              </Link>
            </div>
      
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Useful Links</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/service" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      
          <div className="text-sm text-gray-500 text-center">
            © 2023
            <a href="#" className="hover:underline ml-1">
              Yes Logistics
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </footer>
      
    );
}