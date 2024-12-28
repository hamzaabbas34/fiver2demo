import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black font-montserrat  text-gray-400 py-6 px-8 text-sm">
      <p className=' text-white text-2xl py-4'>Questions? Call 000-800-919-1743</p>
      <div className="grid grid-cols-4  ">
      <div className=" flex flex-col gap-4 font mt-4">
        <Link to="/">FAQ</Link>
        <Link to="/">Investor Relations</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Speed Test</Link>
        {/* Add more footer links */}
      </div>
      <div className=" flex flex-col gap-4 mt-4">
        <Link to="/">FAQ</Link>
        <Link to="/">Investor Relations</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Speed Test</Link>
        {/* Add more footer links */}
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <Link to="/">FAQ</Link>
        <Link to="/">Investor Relations</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Speed Test</Link>
        {/* Add more footer links */}
      </div>
      <div className=" flex flex-col  gap-4 mt-4">
        <Link to="/">FAQ</Link>
        <Link to="/">Investor Relations</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Speed Test</Link>
        {/* Add more footer links */}
      </div>
      </div>
      <p className='py-10'>maghanmoives</p>
    </footer>
  );
};

export default Footer;
