import React from "react";
import {
    MdCheckCircle,
    MdContentCopy,
    MdStore,
    MdReceiptLong,
    MdArrowForward,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const order = {
        id: "INK-8F42K",
        shopName: "ABC Stationery",
        documents: 2,
        pages: 56,
        amount: 144,
        otp: "4821",
    };

    
    const navigate=useNavigate()

    const copyOTP = () => {
        navigator.clipboard.writeText(order.otp);
    };

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className="mx-auto max-w-2xl">
                {/* SUCCESS */}
                <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                        <MdCheckCircle size={38} className="text-green-500" />
                    </div>

                    <h1 className="mt-5 text-2xl font-semibold">
                        Payment Successful
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Your printing order has been successfully placed.
                    </p>

                    {/* ORDER ID */}
                    <div className="mx-auto mt-6 w-fit rounded-lg bg-gray-50 px-5 py-3">
                        <p className="text-[10px] uppercase tracking-wide text-gray-400">
                            Order ID
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            #{order.id}
                        </p>
                    </div>
                </div>

                {/* ORDER DETAILS */}
                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-2">
                        <MdReceiptLong size={19} className="text-orange-500" />

                        <h2 className="text-sm font-semibold">Order Details</h2>
                    </div>

                    <div className="mt-5 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50">
                                    <MdStore
                                        size={18}
                                        className="text-orange-500"
                                    />
                                </div>

                                <div>
                                    <p className="text-xs font-medium">
                                        Stationery
                                    </p>

                                    <p className="text-[11px] text-gray-400">
                                        {order.shopName}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
                            <div>
                                <p className="text-[10px] text-gray-400">
                                    Documents
                                </p>

                                <p className="mt-1 text-xs font-semibold">
                                    {order.documents}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400">
                                    Pages
                                </p>

                                <p className="mt-1 text-xs font-semibold">
                                    {order.pages}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400">
                                    Amount
                                </p>

                                <p className="mt-1 text-xs font-semibold">
                                    ₹{order.amount.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLLECTION OTP */}
                <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-6">
                    <div className="text-center">
                        <p className="text-xs font-semibold text-orange-600">
                            COLLECTION CODE
                        </p>

                        <h2 className="mt-2 text-lg font-semibold">
                            Your collection OTP
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Show this code when collecting your documents.
                        </p>

                        <div className="mt-5 flex items-center justify-center gap-2">
                            <div className="rounded-lg border border-orange-200 bg-white px-6 py-4">
                                <p className="text-3xl font-bold tracking-[0.4em] text-orange-500">
                                    {order.otp}
                                </p>
                            </div>

                            <button
                                onClick={copyOTP}
                                className="rounded-lg border border-orange-200 bg-white p-3 text-orange-500 transition hover:bg-orange-100"
                                title="Copy OTP"
                            >
                                <MdContentCopy size={18} />
                            </button>
                        </div>

                        <p className="mt-4 text-[10px] text-gray-400">
                            Keep this code private until you collect your
                            documents.
                        </p>
                    </div>
                </div>

                {/* TRACK ORDER */}
                <button onClick={()=>navigate('/trackOrder')} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 text-xs font-semibold text-white transition hover:bg-orange-600">
                    Track My Order
                    <MdArrowForward size={16} />
                </button>

                <p className="mt-5 text-center text-[10px] text-gray-400">
                    You can use your Order ID to track your printing order.
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
