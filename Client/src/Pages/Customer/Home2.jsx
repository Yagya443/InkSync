import {
    MdLocationOn,
    MdArrowForward,
    MdSearch,
    MdPrint,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
    const shops = [
        {
            id: 1,
            name: "ABC Stationery",
            location: "Near TCET",
            distance: "0.4 km",
            services: "B&W • Color • Binding",
        },
        {
            id: 2,
            name: "Quick Prints",
            location: "Thakur Village",
            distance: "0.8 km",
            services: "B&W • Color • Scanning",
        },
        {
            id: 3,
            name: "Student Xerox Center",
            location: "Kandivali East",
            distance: "1.2 km",
            services: "B&W • Color • Binding",
        },
        {
            id: 4,
            name: "City Print Hub",
            location: "Borivali West",
            distance: "1.8 km",
            services: "B&W • Color • Lamination",
        },
    ];

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className=" max-w-7xl">
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
                    {shops.map((shop) => (
                        <div
                            key={shop.id}
                            className="rounded-xl border cursor-pointer border-gray-200 bg-white p-5 transition hover:border-orange-200 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                                        <span className="text-sm font-bold">
                                            {shop.name.charAt(0)}
                                        </span>
                                    </div>

                                    <div>
                                        <h2 className="text-sm font-semibold">
                                            {shop.name}
                                        </h2>

                                        <div className="flex items-center gap-2">
                                            <MdLocationOn
                                                size={13}
                                                className="text-gray-400"
                                            />

                                            <p className="text-xs text-gray-400">
                                                {shop.location}
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
                                            {shop.services}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">
                                            Distance
                                        </p>

                                        <p className="text-xs font-medium text-gray-700">
                                            {shop.distance}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("upload")}
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
        </div>
    );
};

export default Home2;
