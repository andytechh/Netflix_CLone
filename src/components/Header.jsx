import React, { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex-row justify-center ml-10 items-center  pt-5">
      <div className="flex items-center justify-between ">
      <h3 className="text-5xl text-red-600 font-bold ">NETFLIX</h3>
     


      <div className="relative flex space-x-5 mr-20">
        {/* Language Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gray-400 px-4 py-2 rounded-3xl w-32 shadow-lg hover:bg-gray-300 cursor-pointer border-2 border-white font-semibold " 
        >
          English
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-12 left-0 w-32 bg-white border rounded-lg shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Spanish</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">French</li>
            </ul>
          </div>
        )}

        {/* Sign In Button */}
        <button className="bg-white text-black px-4 py-2 w-25 rounded-3xl border-black border-1 hover:bg-gray-300 font-semibold">Sign In</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
