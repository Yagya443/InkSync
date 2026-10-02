import React from "react";
import Navbar from "../Components/navbar";

const Home = () => {
    const orders = [
        {
            id: "#1024",
            user: "Guest",
            pages: 36,
            amount: "₹16.40",
            status: "Pending",
        },
        {
            id: "#1023",
            user: "Guest",
            pages: 50,
            amount: "₹24.00",
            status: "Ready",
        },
        {
            id: "#1022",
            user: "Guest",
            pages: 12,
            amount: "₹6.00",
            status: "Printing",
        },
        {
            id: "#1021",
            user: "Guest",
            pages: 28,
            amount: "₹13.20",
            status: "Completed",
        },
        {
            id: "#1020",
            user: "Guest",
            pages: 45,
            amount: "₹21.60",
            status: "Pending",
        },
    ];

    
    function StatusBadge({ status }) {
        const styles = {
            Pending: "bg-orange-50 text-orange-500",
            Ready: "bg-green-50 text-green-600",
            Printing: "bg-blue-50 text-blue-500",
            Completed: "bg-green-50 text-green-600",
        };
    }

    return (
      

        <div className="min-h-screen bg-[#f8f8f7] text-[#171717]">
            <div className="flex min-h-screen">
                {/* SIDEBAR */}
               <Navbar />

                {/* MAIN */}
                <main className="flex-1 p-7">
                    {/* HEADER */}
                    <div className="mb-7 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">
                                Dashboard
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Overview of your stationery orders
                            </p>
                        </div>

                        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600">
                            Today
                            {/* <ChevronDown size={13} /> */}
                        </button>
                    </div>

                    {/* STAT CARDS */}
                    <div className="grid grid-cols-4 gap-4">
                        <StatCard title="Total Orders" value="128" />

                        <StatCard title="Pending Orders" value="12" orange />

                        <StatCard title="Completed Orders" value="116" green />

                        <StatCard title="Total Sales" value="₹4,320" />
                    </div>

                    {/* LOWER SECTION */}
                    <div className="mt-5 grid grid-cols-[1.6fr_1fr] gap-5">
                        {/* RECENT ORDERS */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-sm font-semibold">
                                    Recent Orders
                                </h3>

                                <button className="text-xs text-gray-400">
                                    View all →
                                </button>
                            </div>

                            <div className="overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-100 text-[10px] text-gray-400">
                                            <th className="pb-3 font-medium">
                                                Order ID
                                            </th>

                                            <th className="pb-3 font-medium">
                                                User
                                            </th>

                                            <th className="pb-3 font-medium">
                                                Pages
                                            </th>

                                            <th className="pb-3 font-medium">
                                                Amount
                                            </th>

                                            <th className="pb-3 font-medium">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orders.map((order) => (
                                            <tr
                                                key={order.id}
                                                className="border-b border-gray-50 last:border-none"
                                            >
                                                <td className="py-3 text-xs font-medium">
                                                    {order.id}
                                                </td>

                                                <td className="py-3 text-xs text-gray-500">
                                                    {order.user}
                                                </td>

                                                <td className="py-3 text-xs text-gray-500">
                                                    {order.pages}
                                                </td>

                                                <td className="py-3 text-xs font-medium">
                                                    {order.amount}
                                                </td>

                                                <td className="py-3">
                                                    <StatusBadge
                                                        status={order.status}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* TOP SERVICES */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <h3 className="text-sm font-semibold">
                                Top Services
                            </h3>

                            <div className="mt-5 flex items-center justify-center">
                                {/* Donut */}
                                <div className="relative h-36 w-36 rounded-full bg-[conic-gradient(#f97316_0deg_162deg,#3b82f6_162deg_270deg,#22c55e_270deg_324deg,#facc15_324deg_342deg,#e5e7eb_342deg_360deg)]">
                                    <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white">
                                        <div className="text-center">
                                            <p className="text-lg font-bold">
                                                128
                                            </p>
                                            <p className="text-[9px] text-gray-400">
                                                Orders
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="mt-5 space-y-2">
                                <Service name="Notes Printing" value="45%" />

                                <Service
                                    name="Assignment Printing"
                                    value="25%"
                                />

                                <Service name="Papers" value="15%" />

                                <Service name="Spiral Binding" value="10%" />

                                <Service name="Others" value="5%" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

/* STAT CARD */

function StatCard({ title, value, orange, green }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-red-300 p-5">
            <p className="text-[11px] text-gray-500">{title}</p>

            <p
                className={`mt-2 text-2xl font-semibold ${
                    orange
                        ? "text-orange-500"
                        : green
                          ? "text-green-600"
                          : "text-gray-900"
                }`}
            >
                {value}
            </p>
        </div>
    );
}

/* SERVICE */

function Service({ name, value }) {
    return (
        <div className="flex items-center justify-between bg-yellow-400 text-xs">
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-gray-600">{name}</span>
            </div>

            <span className="font-medium text-gray-500">{value}</span>
        </div>
    );
}

export default Home;
