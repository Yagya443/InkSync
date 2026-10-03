import {
    MdSearch,
    MdFilterList,
    MdMoreVert,
    MdDownload,
    MdVisibility,
} from "react-icons/md";

const AllOrders = () => {
    const orders = [
        {
            id: "#1024",
            customer: "Guest",
            document: "DBMS_Assignment.pdf",
            pages: 36,
            copies: 2,
            type: "B&W",
            amount: "₹16.40",
            status: "Pending",
            date: "Today, 10:42 AM",
        },
        {
            id: "#1023",
            customer: "Guest",
            document: "CN_Notes.pdf",
            pages: 50,
            copies: 1,
            type: "B&W",
            amount: "₹24.00",
            status: "Ready",
            date: "Today, 10:28 AM",
        },
        {
            id: "#1022",
            customer: "Guest",
            document: "AI_Assignment.pdf",
            pages: 12,
            copies: 1,
            type: "Color",
            amount: "₹6.00",
            status: "Printing",
            date: "Today, 10:15 AM",
        },
        {
            id: "#1021",
            customer: "Guest",
            document: "OS_Practical.pdf",
            pages: 28,
            copies: 2,
            type: "B&W",
            amount: "₹13.20",
            status: "Completed",
            date: "Today, 09:52 AM",
        },
        {
            id: "#1020",
            customer: "Guest",
            document: "TOC_Questions.pdf",
            pages: 45,
            copies: 1,
            type: "B&W",
            amount: "₹21.60",
            status: "Pending",
            date: "Today, 09:31 AM",
        },
        {
            id: "#1019",
            customer: "Guest",
            document: "Math_Assignment.pdf",
            pages: 20,
            copies: 1,
            type: "Color",
            amount: "₹18.00",
            status: "Completed",
            date: "Yesterday, 06:42 PM",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8f7] p-7 text-[#171717]">
            <div className="mb-7 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">Orders</h2>
                    <p className="mt-1 text-xs text-gray-500">
                        Manage and process your stationery orders
                    </p>
                </div>

                <button className="rounded-md text-gray-600 hover:bg-gray-50 border border-gray-200 bg-white px-3 py-2 text-xs ">
                    Today
                </button>
            </div>

            <div className="grid grid-cols-4 mb-5  gap-4">
                <OrderStat title="All Orders" value="128" />
                <OrderStat title="Pending" value="12" />
                <OrderStat title="Printing" value="4" />
                <OrderStat title="Completed" value="116" />
            </div>

            <div className="border border-gray-200 rounded-xl bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 p-5">
                    <div>
                        <h3 className="text-sm font-semibold">All Orders</h3>
                        <p className="text-sm text-gray-400">
                            View and manage incoming print requests
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
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="rounded-xl  p-5 transition hover:shadow-md border border-gray-200 bg-white"
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
                                            Order {order.id} • {order.date}
                                        </p>
                                    </div>
                                </div>

                                <StatusBadge status={order.status} />
                            </div>

                            <div className="my-5 grid grid-cols-4 gap-3 border-y border-gray-100 py-4">
                                <Detail label="Pages" value={order.pages} />

                                <Detail label="Copies" value={order.copies} />

                                <Detail label="Print" value={order.type} />

                                <Detail label="Amount" value={order.amount} />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Customer
                                    </p>

                                    <p className="text-xs font-medium">Guest</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="rounded-md bg-green-500  text-white transition hover:bg-green-600 px-2 py-1 text-xs font-semibold">
                                        Mark as Done
                                    </button>

                                    <button className="text-gray-400 hover:bg-gray-100 hover:text-gray-700 rounded-md p-2 ">
                                        <MdDownload size={17} />
                                    </button>

                                    <button className="text-gray-400 hover:bg-gray-100 hover:text-gray-700 rounded-md p-2 ">
                                        <MdMoreVert size={17} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllOrders;

function OrderStat({ title, value }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-[11px] text-gray-400">{title}</p>

            <p className={`mt-2 text-2xl font-semibold `}>{value}</p>
        </div>
    );
}

function Detail({ label, value }) {
    return (
        <div>
            <p className="text-[10px] text-gray-400">{label}</p>

            <p className="mt-1 text-xs font-medium text-gray-700">{value}</p>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Pending: "bg-orange-50 text-orange-500",
        Ready: "bg-green-50 text-green-600",
        Completed: "bg-green-50 text-green-600",
    };

    return (
        <span
            className={`rounded-full px-2 py-1 text-[10px] ${styles[status]}`}
        >
            {status}
        </span>
    );
}
