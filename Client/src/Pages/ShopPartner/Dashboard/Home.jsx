import React from "react";
import StatCard from "../../../Components/ShopPartner/StatCard";
import OrderTable from "./OrderTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
    
    const {
        data = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["allOrders"],
        queryFn: async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/order`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            // console.log(response.data.orders);
            return response.data.orders;
        },
    });

    if (isLoading) {
        return <div className="p-10 text-center">Loading orders...</div>;
    }

    if (isError) {
        return (
            <div className="p-10 text-center text-red-500">
                Failed to load orders.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f8f7] text-[#171717]">
            <main className="p-7">
                <div className="mb-7 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">Dashboard</h2>

                        <p className="text-xs text-gray-500">
                            Overview of your stationery orders
                        </p>
                    </div>

                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600">
                        Today
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <StatCard title={"Total Orders"} value={"128"} />
                    <StatCard title={"Pending Orders"} value={"12"} />
                    <StatCard title={"Completed Orders"} value={"16"} />
                    <StatCard title={"Total Sales"} value={"₹4,320"} />
                </div>

                <div className="mt-5 grid grid-cols-[1.6fr_1fr] gap-5">
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
                            <OrderTable orders={data} />
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <h3 className="text-sm font-semibold">Top Services</h3>
                        <div>Graph</div>
                    </div>
                </div>
            </main>
        </div>
    );
};

function Service({ name, value }) {
    return (
        <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-gray-600">{name}</span>
            </div>
            <span className="font-medium text-gray-500">{value}</span>
        </div>
    );
}

export default Home;
