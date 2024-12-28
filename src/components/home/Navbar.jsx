import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (value) => {
    setLanguage(value);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold">MAGHANNMOVIE</h1>
      <div className="flex items-center gap-4">
        {/* Custom Language Selection Dropdown */}
        <div className="relative">
          {/* Selected Language */}
          <div
            className=" border bg-DodgerBlue  text-white py-2 px-4 rounded-full cursor-pointer flex justify-between items-end gap-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {language}
            <div
              className={`w-0 h-0 border-[6px] border-transparent border-t-white  rotate-180 mr-[-2px] `}
              style={{ borderColor: 'transparent transparent white transparent' }}
            ></div>
          </div>

          {/* Dropdown Options */}
          {isOpen && (
            <div className="absolute left-0 w-full bg-white text-black mt-1 rounded-lg shadow-lg z-10">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-DodgerBlue "
                onClick={() => handleLanguageChange('English')}
              >
                English
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-DodgerBlue "
                onClick={() => handleLanguageChange('French')}
              >
                French
              </div>
            </div>
          )}
        </div>

        <button className="bg-red-500 px-4 py-2 rounded-full cursor-pointer "><Link to='/sign'>Sign In</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
