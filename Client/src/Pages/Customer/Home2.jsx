import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
    MdLocationOn,
    MdArrowForward,
    MdSearch,
    MdPrint,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
    const navigate = useNavigate();

    const [inputVal, setInputVal] = useState("");

    const {
        data = [],
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["allShops"],
        queryFn: async () => {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/shop`,
            );
            return response.data.shops;
        },
    });

    if (isError) {
        console.log(error);
        return (
            <div className="p-10 text-center text-red-500">
                Failed to load orders.
            </div>
        );
    }

    if (isLoading)
        return <div className="p-5 text-center">Loading shops...</div>;

    const filteredData = data.filter((e) => {
        return (
            e.shopName?.toLowerCase().includes(inputVal.toLowerCase()) ||
            e.location?.toLowerCase().includes(inputVal.toLowerCase()) ||
            e.ownerName?.toLowerCase().includes(inputVal.toLowerCase()) ||
            ""
        );
    });

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <div className="flex items-center gap-1 justify-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500">
                            <MdPrint size={20} className="text-white" />
                        </div>
                        <h1 className="text-xl font-semibold">InkSync</h1>
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold">
                        Choose a Print Shop
                    </h1>

                    <p className="text-sm text-gray-500">
                        Select a stationery near you to send your documents
                        directly.
                    </p>
                </div>
                <div className="mt-8 flex max-w-xl items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <MdSearch size={19} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search stationery or location..."
                        onChange={(e) => setInputVal(e.target.value)}
                        value={inputVal}
                        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                </div>
                <div className="mt-7 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            Available Print Shops
                        </p>
                        <p className="text-xs text-gray-400">
                            Choose where you want to print
                        </p>
                    </div>

                    <button className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        <MdLocationOn size={16} className="text-orange-500" />
                        Use my location
                    </button>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {filteredData?.map((shop) => (
                        <div
                            key={shop.id}
                            className="rounded-xl border cursor-pointer border-gray-200 bg-white p-5 transition hover:border-orange-200 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                                        <span className="text-sm font-bold">
                                            {shop.shopName.charAt(0)}
                                        </span>
                                    </div>

                                    <div>
                                        <h2 className="text-sm font-semibold">
                                            {shop.shopName}
                                        </h2>

                                        <div className="flex items-center gap-1 mt-1">
                                            <MdLocationOn
                                                size={13}
                                                className="text-gray-400"
                                            />

                                            <p className="text-xs text-gray-400">
                                                {shop.location || "Location"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                                    Open
                                </span>
                            </div>

                            <div className="mt-5 border-t border-gray-100 pt-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-gray-400">
                                            Services
                                        </p>

                                        <p className="text-xs text-gray-600">
                                            {shop.options &&
                                            shop.options.length > 0
                                                ? shop.options
                                                      .map((opt) => opt.name)
                                                      .join(" • ")
                                                : "B&W • Color"}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">
                                            Distance
                                        </p>

                                        <p className="text-xs font-medium text-gray-700">
                                            {shop.distance || "5km"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    navigate("/upload", {
                                        state: {
                                            shopId: shop.id,
                                            shopName: shop.shopName,
                                            address: shop.location,
                                        },
                                    })
                                }
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600"
                            >
                                Select Shop
                                <MdArrowForward size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs text-gray-400">
                    No account required • No phone number sharing
                </p>
            </div>
            <button onClick={() => navigate("/ShopPartner")}>
                Login as a shopkeeper
            </button>
        </div>
    );
};

export default Home2;
