import React from "react";
import {
    MdDashboard,
    MdShoppingBag,
    MdPendingActions,
    MdCheckCircle,
    MdSettings,
    MdPrint,
} from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" flex h-screen w-55 flex-col border-r border-gray-200 bg-white px-4 pt-5 pb-2">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-2 px-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                    <MdPrint size={20} className="text-white" />
                </div>

                <div>
                    <h1 className="text-sm font-bold">InkSync</h1>
                    <p className="text-[11px] text-gray-500">Print System</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
                {/* Dashboard */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs ${
                            isActive
                                ? "bg-orange-500 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`
                    }
                >
                    <MdDashboard size={17} />
                    <span className="flex-1">Dashboard</span>
                </NavLink>

                {/* Orders */}
                <NavLink
                    to="/Orders"
                    className={({ isActive }) =>
                        `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs ${
                            isActive
                                ? "bg-orange-500 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`
                    }
                >
                    <MdShoppingBag size={17} />
                    <span className="flex-1">Orders</span>
                </NavLink>

                {/* Pending Orders */}
                <NavLink
                    to="/PendingOrders"
                    className={({ isActive }) =>
                        `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs ${
                            isActive
                                ? "bg-orange-500 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`
                    }
                >
                    <MdPendingActions size={17} />

                    <span className="flex-1">Pending Orders</span>

                    <span className="rounded-full bg-orange-500 px-1.5 py-0.5 text-[9px] text-white">
                        12
                    </span>
                </NavLink>

                {/* Completed Orders */}
                <NavLink
                    to="/CompletedOrders"
                    className={({ isActive }) =>
                        `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs ${
                            isActive
                                ? "bg-orange-500 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`
                    }
                >
                    <MdCheckCircle size={17} />

                    <span className="flex-1">Completed Orders</span>
                </NavLink>

                {/* Settings */}
                <NavLink
                    to="/Settings"
                    className={({ isActive }) =>
                        `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs ${
                            isActive
                                ? "bg-orange-500 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`
                    }
                >
                    <MdSettings size={17} />

                    <span className="flex-1">Settings</span>
                </NavLink>
            </nav>

            {/* Logout */}
            <button className="mt-auto flex w-full items-center justify-between gap-3 rounded-lg bg-gray-100 px-3 py-2.5 text-xs text-gray-600 hover:text-red-500">
                <p className="font-semibold">Logout</p>

                <CiLogin size={22} className="text-orange-500" />
            </button>
        </div>
    );
};

export default Navbar;
