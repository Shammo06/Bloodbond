import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { MdOutlineApproval } from "react-icons/md";

const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="flex">
            <aside className={` ${open ? "md:w-72" : "w-20"} w-20 duration-500 h-screen  bg-[#f87087ea]`}>
                <div className="relative p-5">
                    <FaArrowLeft onClick={() => setOpen(!open)} className={`bg-white cursor-pointer text-black text-2xl rounded-full border border-black p-1 absolute top-12 -right-3 ${!open && "rotate-180"}`} />
                    <div className="flex items-center">
                        <img className="w-20" src="https://i.ibb.co/RpwQSwM/Blood-Bondbb.png" alt="" />
                        <h2 className={`text-xl font-bold text-white ${!open && "scale-0"} duration-500`}>BloodBond</h2>
                    </div>
                </div>
                <div className="pl-3">
                    <ul className="space-y-1">
                        <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                            <NavLink
                                to="/dashboard/home"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                }
                            >
                                <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Home</span></span>
                            </NavLink>
                        </li>
                        <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                            <NavLink
                                to="/dashboard/appointment"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                }
                            >
                                <span className="flex items-center gap-2"><span><MdOutlineApproval className="text-3xl"/></span><span className={`${!open && "scale-0"} duration-500`}>Approve Appointment</span></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
            <section className="p-8 bg-black bg-opacity-5 w-full">

                <Outlet></Outlet>
            </section>
        </div>

    );
};

export default Dashboard;