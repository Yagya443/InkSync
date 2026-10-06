import React from "react";
import {
    MdCheckCircle,
    MdRadioButtonUnchecked,
    MdStore,
    MdDescription,
    MdPayment,
    MdPrint,
    MdDone,
    MdArrowBack,
} from "react-icons/md";

const TrackOrder = () => {
    const order = {
        id: "INK-8F42K",
        shopName: "ABC Stationery",
        documents: 2,
        pages: 56,
        amount: 144,
        status: "Printing",
        otp: "4821",
    };

    const steps = [
        {
            title: "Payment Successful",
            description: "Payment has been received",
            icon: MdPayment,
            completed: true,
        },
        {
            title: "Order Received",
            description: "Stationery has received your order",
            icon: MdDescription,
            completed: true,
        },
        {
            title: "Printing",
            description: "Your documents are being printed",
            icon: MdPrint,
            completed: true,
            current: true,
        },
        {
            title: "Ready for Collection",
            description: "Your order is ready to collect",
            icon: MdCheckCircle,
            completed: false,
        },
        {
            title: "Collected",
            description: "Order completed",
            icon: MdDone,
            completed: false,
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className="mx-auto max-w-3xl">
                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-orange-500">
                            Order Tracking
                        </p>

                        <h1 className="text-2xl font-semibold">
                            Track Your Order
                        </h1>

                        <p className="mt-1 text-xs text-gray-500">
                            Follow the progress of your printing order.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white px-4 py-2">
                        <p className="text-[10px] text-gray-400">Order ID</p>

                        <p className="text-xs font-semibold">#{order.id}</p>
                    </div>
                </div>

                {/* CURRENT STATUS */}
                <div className="mt-7 rounded-xl border border-orange-200 bg-orange-50 p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-wide text-orange-500">
                                Current Status
                            </p>

                            <h2 className="mt-1 text-lg font-semibold">
                                Your order is being printed
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Please wait while the stationery prepares your
                                documents.
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                            <MdPrint size={24} />
                        </div>
                    </div>
                </div>

                {/* ORDER DETAILS */}
                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5">
                    <h2 className="text-sm font-semibold">Order Details</h2>

                    <div className="mt-5 grid grid-cols-4 gap-4">
                        <div>
                            <p className="text-[10px] text-gray-400">
                                Stationery
                            </p>

                            <div className="mt-1 flex items-center gap-1">
                                <MdStore
                                    size={14}
                                    className="text-orange-500"
                                />

                                <p className="text-xs font-medium">
                                    {order.shopName}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] text-gray-400">
                                Documents
                            </p>

                            <p className="mt-1 text-xs font-semibold">
                                {order.documents}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] text-gray-400">Pages</p>

                            <p className="mt-1 text-xs font-semibold">
                                {order.pages}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] text-gray-400">Amount</p>

                            <p className="mt-1 text-xs font-semibold">
                                ₹{order.amount.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* PROGRESS */}
                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="text-sm font-semibold">Order Progress</h2>

                    <div className="mt-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLast = index === steps.length - 1;

                            return (
                                <div
                                    key={step.title}
                                    className="relative flex gap-4"
                                >
                                    {/* LINE */}
                                    {!isLast && (
                                        <div
                                            className={`absolute left-[15px] top-8 h-12 w-[2px] ${
                                                steps[index + 1].completed
                                                    ? "bg-green-400"
                                                    : "bg-gray-200"
                                            }`}
                                        />
                                    )}

                                    {/* ICON */}
                                    <div
                                        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                                            step.completed
                                                ? "bg-green-50 text-green-500"
                                                : "bg-gray-100 text-gray-400"
                                        } ${
                                            step.current
                                                ? "ring-4 ring-orange-100"
                                                : ""
                                        }`}
                                    >
                                        <Icon size={17} />
                                    </div>

                                    {/* TEXT */}
                                    <div className="pb-8 ">
                                        <p
                                            className={`text-xs font-semibold ${
                                                step.current
                                                    ? "text-orange-500"
                                                    : step.completed
                                                      ? "text-gray-700"
                                                      : "text-gray-400"
                                            }`}
                                        >
                                            {step.title}
                                        </p>

                                        <p className="mt-1 text-[10px] text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* COLLECTION OTP */}
                <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-6">
                    <div className="text-center">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-orange-500">
                            Collection Code
                        </p>

                        <h2 className="mt-2 text-sm font-semibold">
                            Use this code when collecting your order
                        </h2>

                        <div className="mt-4 inline-block rounded-lg border border-orange-200 bg-white px-7 py-3">
                            <p className="text-2xl font-bold tracking-[0.35em] text-orange-500">
                                {order.otp}
                            </p>
                        </div>

                        <p className="mt-3 text-[10px] text-gray-400">
                            Give this code to the stationery owner only when
                            collecting your documents.
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <button className="mt-6 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
                    <MdArrowBack size={16} />
                    Back
                </button>
            </div>
        </div>
    );
};

export default TrackOrder;
