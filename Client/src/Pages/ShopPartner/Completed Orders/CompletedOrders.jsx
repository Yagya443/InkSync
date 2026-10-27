import React from "react";
import { MdSearch, MdMoreVert, MdDownload } from "react-icons/md";
import StatCard from "../../../Components/ShopPartner/StatCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CompletedOrders = () => {
    const { data=[], isLoading, isError } = useQuery({
        queryKey: ["orders","completed"],
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

            const allOrders = response.data.orders;
            return allOrders.filter((ele) => ele.status === "Completed");
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
        <div className="min-h-screen bg-[#f8f8f7] p-7 text-[#171717]">
            <div className="mb-7 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">Completed Orders</h2>

                    <p className=" text-xs text-gray-500">
                        View your completed stationery orders
                    </p>
                </div>

                <button className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
                    Today
                </button>
            </div>
            <div className="mb-5 grid grid-cols-4 gap-4">
                <StatCard title="Completed Orders" value="116" />
                <StatCard title="Total Pages" value="4,286" />
                <StatCard title="Total Copies" value="248" />
                <StatCard title="Total Revenue" value="₹4,320" />
            </div>
            <div className="rounded-xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 p-5">
                    <div>
                        <h3 className="text-sm font-semibold">
                            Completed Orders
                        </h3>
                        <p className="text-sm text-gray-400">
                            View all successfully completed print requests
                        </p>
                    </div>

                    <div className="flex w-64 items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                        <MdSearch size={17} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 px-6 py-3">
                    {data.length == 0 ? (
                        <div className="p-10 text-center">
                            You Dont Have any Completed order
                        </div>
                    ) : (
                        <>
                            {data?.map((order) => (
                                <div
                                    key={order.id}
                                    className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-md"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                                                PDF
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold">
                                                    {order.document}
                                                </p>
                                                <p className="mt-1 text-[10px] text-gray-400">
                                                    Order {order.id} •{" "}
                                                    {order.date}
                                                </p>
                                            </div>
                                        </div>

                                        <StatusBadge status={order.status} />
                                    </div>
                                    <div className="my-5 grid grid-cols-4 gap-3 border-y border-gray-100 py-4">
                                        <Detail
                                            label="Pages"
                                            value={order.pages}
                                        />

                                        <Detail
                                            label="Copies"
                                            value={order.copies}
                                        />

                                        <Detail
                                            label="Print"
                                            value={order.type}
                                        />

                                        <Detail
                                            label="Amount"
                                            value={order.amount}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-400">
                                                Customer
                                            </p>
                                            <p className="text-xs font-medium">
                                                {order.customer}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700">
                                                {" "}
                                                <MdDownload size={17} />
                                            </button>
                                            <button className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700">
                                                <MdMoreVert size={17} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompletedOrders;

function Detail({ label, value }) {
    return (
        <div>
            <p className="text-xs text-gray-400">{label}</p>

            <p className="text-xs font-medium text-gray-700">{value}</p>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Completed: "bg-green-50 text-green-600",
    };

    return (
        <span className={`rounded-md px-2 py-1 text-xs ${styles[status]}`}>
            {status}
        </span>
    );
}
