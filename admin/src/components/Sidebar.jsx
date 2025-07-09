import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-[#1A1A1A] text-[#f0f0f0] border-r border-[#333] shadow-lg">
      <div className="flex flex-col gap-4 pt-10 pl-6 text-[15px] font-light">

         <img src={assets.logo} className="w-32 mb-6" alt="Kintsugi Admin" />
        {/* --- Sidebar Links --- */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-md border-l-4 ${
              isActive ? 'border-[#D4AF37] bg-[#2c2c2c]' : 'border-transparent hover:bg-[#2c2c2c]'
            } transition`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add" />
          <p>Add Items</p>
        </NavLink>

        <NavLink
          to="/add-artist"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-md border-l-4 ${
              isActive ? 'border-[#D4AF37] bg-[#2c2c2c]' : 'border-transparent hover:bg-[#2c2c2c]'
            } transition`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Artist" />
          <p>Add Artist</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-md border-l-4 ${
              isActive ? 'border-[#D4AF37] bg-[#2c2c2c]' : 'border-transparent hover:bg-[#2c2c2c]'
            } transition`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List Items" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-l-md border-l-4 ${
              isActive ? 'border-[#D4AF37] bg-[#2c2c2c]' : 'border-transparent hover:bg-[#2c2c2c]'
            } transition`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
