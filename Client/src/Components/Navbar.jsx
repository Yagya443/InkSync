import React from "react";
import {
    MdDashboard,
    MdShoppingBag,
    MdPendingActions,
    MdCheckCircle,
    MdBarChart,
    MdSettings,
} from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { MdPrint } from "react-icons/md";
const Navbar = () => {
    return (
        <aside className="flex h-screen w-55 flex-col border-r border-gray-200 bg-white px-4 pt-5 pb-2">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-2 px-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                    <MdPrint size={17} className="text-white" />
                </div>

                <div>
                    <h1 className="text-sm font-bold">Stationery</h1>
                    <p className="text-[11px] text-gray-500">Print System</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
                {/* Dashboard */}
                <button className="flex w-full items-center gap-3 rounded-lg bg-orange-500 px-3 py-2.5 text-left text-xs text-white">
                    <MdDashboard size={17} />
                    <span className="flex-1">Dashboard</span>
                </button>

                {/* Orders */}
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs text-gray-600 transition hover:bg-gray-100">
                    <MdShoppingBag size={17} />
                    <span className="flex-1">Orders</span>
                </button>

                {/* Pending Orders */}
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs text-gray-600 transition hover:bg-gray-100">
                    <MdPendingActions size={17} />
                    <span className="flex-1">Pending Orders</span>

                    <span className="rounded-full bg-orange-500 px-1.5 py-0.5 text-[9px] text-white">
                        12
                    </span>
                </button>

                {/* Completed Orders */}
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs text-gray-600 transition hover:bg-gray-100">
                    <MdCheckCircle size={17} />
                    <span className="flex-1">Completed Orders</span>
                </button>

                {/* Reports */}
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs text-gray-600 transition hover:bg-gray-100">
                    <MdBarChart size={17} />
                    <span className="flex-1">Reports</span>
                </button>

                {/* Settings */}
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs text-gray-600 transition hover:bg-gray-100">
                    <MdSettings size={17} />
                    <span className="flex-1">Settings</span>
                </button>
            </nav>

            {/* Logout */}
            <button className="mt-auto flex w-full items-center justify-between gap-3 px-3 py-2.5 text-xs text-gray-600 hover:text-red-500">
                <p>Logout</p>
                <CiLogin size={20} fill="bg-orange-500" />
            </button>
        </aside>
    );
};

export default Navbar;
