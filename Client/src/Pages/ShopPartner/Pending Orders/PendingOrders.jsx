import React from "react";
import { MdSearch, MdDownload, MdMoreVert } from "react-icons/md";
import StatCard from "../../../Components/ShopPartner/StatCard";
import { useQuery } from "@tanstack/react-query";

const PendingOrders = () => {
     const { data, isLoading, isError } = useQuery({
            queryKey: ["orders","pending"],
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
                console.log(response.data);
    
                const allOrders= response.data.orders;
                return allOrders.filter((ele) => ele.status === "Pending");
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
                    <h2 className="text-2xl font-semibold">Pending Orders</h2>
                    <p className="text-xs text-gray-500">
                        Manage and process your pending stationery orders
                    </p>
                </div>
                <button className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
                    Today
                </button>
            </div>
            <div className="grid grid-cols-4 mb-5 gap-4">
                <StatCard title="Pending Orders" value="12" />
                <StatCard title="Total Pages" value="486" />
                <StatCard title="Total Copies" value="24" />
                <StatCard title="Pending Amount" value="₹234.60" />
            </div>

            <div className="rounded-xl bg-white border border-gray-200 ">
                <div className=" p-5  flex items-center justify-between  border-b border-gray-100">
                    <div>
                        <h3 className="text-sm font-semibold">
                            Pending Orders
                        </h3>
                        <p className="text-sm text-gray-400">
                            View and process incoming print requests
                        </p>
                    </div>

                    <div className="flex w-64 items-center  gap-2 rounded-lg border border-gray-200 px-3 py-2">
                        <MdSearch size={17} className="text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="w-full  text-xs placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className=" grid grid-cols-3 gap-4 px-6  py-3">
                    {data.length == 0 ? (
                        <div className="p-10 text-center">
                            You Dont Have any Pending order
                        </div>
                    ) : (
                        <>
                            {data.map((order) => (
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

export default PendingOrders;

function Detail({ label, value }) {
    return (
        <div>
            <p className="text-xs text-gray-400">{label}</p>

            <p className="text-xs font-semibold text-gray-700">{value}</p>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Pending: "bg-orange-50 text-orange-500",
    };

    return (
        <span className={`rounded-md px-2 py-1 text-xs ${styles[status]}`}>
            {status}
        </span>
    );
}
