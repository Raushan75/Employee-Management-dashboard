import { User2 } from "lucide-react";
import {  NavLink, useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Settings } from "lucide-react";

const User={
    name:"Raushan Kumar",
    photo:""
}
export default function Sidebar(){
    const navigate =useNavigate();
    const firstLetter = User.name.charAt(0).toUpperCase();

    const handleLogout=()=>{
        navigate("/login")
    }
    const navClass = ({ isActive } :{isActive: boolean}) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition
     ${
       isActive
         ? "bg-white text-black"
         : "text-gray-300 hover:bg-gray-800 hover:text-white"
     }`;


    return (
      <div className="w-65 bg-black text-white p-5 flex flex-col h-screen">
        <div>
          <h2 className="text-lg gap-2 items-center font-poppins font-medium flex">
            <User2 className="w-6 h-6 rounded-full bg-white text-black" />{" "}
            Employee Dashboard
          </h2>
          <nav className="flex flex-col gap-4 mt-6">
            <NavLink to="/dashboard" className={navClass}>
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </NavLink>
            <NavLink to="/employees" className={navClass}>
              <Users className="w-4 h-4" />
              Employees
            </NavLink>
            <NavLink to="/settings" className={navClass}>
              {" "}
              <Settings className="w-4 h-4" />
              Settings
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex items-center gap-3 mb-3 border p-2 border-gray-700 rounded-md">
            {User.photo ? (
              <img
                src={User.photo}
                alt={User.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg font-semibold">
                {firstLetter}
              </div>
            )}

            <p className="font-medium text-lg">{User.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm transition"
          >
            Logout
          </button>
        </div>
      </div>
    );
}