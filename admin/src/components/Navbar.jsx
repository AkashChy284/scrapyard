import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-4 px-8 border-b border-[#e0c178] bg-[#fbf9f5]">
      <img
        src={assets.logo}
        alt="Kintsugi Admin"
        className="w-28"
      />
      <button
        onClick={() => setToken('')}
        className="bg-[#3a3a3a] text-white px-5 py-2 rounded-full border border-[#e0c178] hover:bg-[#4e4e4e] hover:text-[#e0c178] transition-all duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;