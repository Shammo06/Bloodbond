import React, { useState } from "react";
import { FaArrowLeft, FaUsers } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { MdOutlineApproval } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { LuTestTubes } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="">

            <div className="flex">
                {/* #FF464E */}
                <aside className={` ${open ? "md:w-72" : "w-20"} hidden md:block duration-500 min-h-screen  bg-[#FF464E]`}>
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
                                    <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Overview</span></span>
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
                                    to="/dashboard/manageusers"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><FaUsers className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Manage Users</span></span>
                                </NavLink>
                            </li>
                            <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                <NavLink
                                    to="/dashboard/userhome"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Overview</span></span>
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
                            <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                <NavLink
                                    to="/dashboard/profile"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                    }
                                >
                                    <span className="flex items-center gap-2"><span><CgProfile className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Profile</span></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section className="p-8 bg-black bg-opacity-5 w-full">
                    <div className="drawer  pb-5 md:pb-0">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex justify-between items-center bg-white p-3 gap-6 rounded-lg border mb-3">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn md:hidden drawer-button"><IoMenu className="text-2xl" /></label>
                            <div className="hidden md:block">
                                <h2 className="text-2xl font-semibold">Overview</h2>
                            </div>
                            <div className="">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to="/dashboard/profile" className="justify-between ">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">

                            </label>
                            {/* <ul className="menu w-70 min-h-full bg-base-200 text-base-content">
                            </ul> */}

                            <div className="pl-3 w-64 bg-[#FF464E] h-screen">

                                <div className="flex justify-around">

                                    <Link to="/">
                                        <div className="flex items-center">
                                            <img className="w-20" src="https://i.ibb.co/RpwQSwM/Blood-Bondbb.png" alt="" />
                                            <h2 className={`text-xl font-bold text-white ${!open && "scale-0"} duration-500 `}>BloodBond</h2>
                                        </div>
                                    </Link>
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay mt-3 btn btn-sm rounded-full bg-red-400 border-none">
                                        X
                                    </label>
                                </div>
                                <ul className="space-y-1">
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/home"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={` duration-500`}>Overview</span></span>
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
                                            <span className="flex items-center gap-2"><span><TiHome className="text-3xl" /></span><span className={` duration-500`}>Overview</span></span>
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
                                    <li className="font-medium hover:bg-red-600 hover:text-white rounded-lg">
                                        <NavLink
                                            to="/dashboard/profile"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white p-2 block bg-red-600 rounded-l-lg border-black border-r-4 " : "p-2 block"
                                            }
                                        >
                                            <span className="flex items-center gap-2"><span><CgProfile className="text-3xl" /></span><span className={`${!open && "scale-0"} duration-500`}>Profile</span></span>
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