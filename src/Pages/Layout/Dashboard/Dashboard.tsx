import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { MdOutlineApproval } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { LuTestTubes } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="">

            <div className="flex">
                {/* #FF464E */}
                <aside className={` ${open ? "md:w-72" : "w-20"} hidden md:block duration-500 h-screen  bg-[#FF464E]`}>
                    <div className="relative p-5">
                        <FaArrowLeft onClick={() => setOpen(!open)} className={`bg-white cursor-pointer text-black text-2xl rounded-full border border-black p-1 absolute top-12 -right-3 ${!open && "rotate-180"}`} />
                        <Link to="/">
                            <div className="flex items-center">
                                <img className="w-20" src="https://i.ibb.co/RpwQSwM/Blood-Bondbb.png" alt="" />
                                <h2 className={`text-xl font-bold text-white ${!open && "scale-0"} duration-500 `}>BloodBond</h2>
                            </div>
                        </Link>
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
                                    <span className="flex items-center gap-2"><span><MdOutlineApproval className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Approve Appointment</span></span>
                                </NavLink>
                            </li>
                            <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                <NavLink
                                    to="/dashboard/volunteer"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><MdOutlineVolunteerActivism className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>VolunteerManage</span></span>
                                </NavLink>
                            </li>
                            <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                <NavLink
                                    to="/dashboard/campaign"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><TbBrandCampaignmonitor className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Manage Campaign</span></span>
                                </NavLink>
                            </li>
                            <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                <NavLink
                                    to="/dashboard/userhome"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Home</span></span>
                                </NavLink>
                            </li>
                            <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                <NavLink
                                    to="/dashboard/userappointment"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><LuTestTubes className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Test Status</span></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section className="p-8 bg-black bg-opacity-5 w-full">
                    <div className="drawer md:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content bg-white p-5 gap-6 rounded-lg border">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn  drawer-button"><IoMenu className="text-2xl" /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            {/* <ul className="menu w-70 min-h-full bg-base-200 text-base-content">
                            </ul> */}

                            <div className="pl-3 w-64 bg-[#FF464E] h-screen">
                                <Link to="/">
                                    <div className="flex items-center">
                                        <img className="w-20" src="https://i.ibb.co/RpwQSwM/Blood-Bondbb.png" alt="" />
                                        <h2 className={`text-xl font-bold text-white ${!open && "scale-0"} duration-500 `}>BloodBond</h2>
                                    </div>
                                </Link>
                                <ul className="space-y-1">
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/home"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={` duration-500`}>Home</span></span>
                                        </NavLink>
                                    </li>
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/appointment"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><MdOutlineApproval className="text-3xl" /></span><span className={` duration-500`}>Approve Appointment</span></span>
                                        </NavLink>
                                    </li>
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/volunteer"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><MdOutlineVolunteerActivism className="text-3xl" /></span><span className={` duration-500`}>VolunteerManage</span></span>
                                        </NavLink>
                                    </li>
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/campaign"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><TbBrandCampaignmonitor className="text-3xl" /></span><span className={` duration-500`}>Manage Campaign</span></span>
                                        </NavLink>
                                    </li>
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/userhome"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={` duration-500`}>Home</span></span>
                                        </NavLink>
                                    </li>
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/userappointment"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><LuTestTubes className="text-3xl" /></span><span className={` duration-500`}>Test Status</span></span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </section>
            </div>




        </div>

    );
};

export default Dashboard;