import React, { useState } from "react";
import { MdArrowBack, MdLock, MdPayment, MdCheckCircle } from "react-icons/md";
import { HiOutlineCash } from "react-icons/hi";
import { MdCheckCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PaymentGateway = () => {
    const order = {
        shopName: "ABC Stationery",
        documents: 2,
        pages: 56,
        amount: 144,
    };

    const [paymentMethod, setPaymentMethod] = useState("online");

    const navigate=useNavigate()

    const handlePayment = () => {
        // Later we will connect Razorpay here
        console.log("Opening Razorpay...");

        navigate("/success")
    };

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className="mx-auto max-w-5xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-orange-500">
                            {order.shopName}
                        </p>
                        <h1 className="text-2xl font-semibold">Payment</h1>
                        <p className="text-xs text-gray-500">
                            Review your order and complete the payment.
                        </p>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-600">
                        <MdLock size={14} />
                        Secure Payment
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-5">
                    <div className="col-span-2 space-y-5">
                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <div className="flex items-center gap-2">
                                <MdPayment
                                    size={19}
                                    className="text-orange-500"
                                />
                                <h2 className="text-sm font-semibold">
                                    Order Details
                                </h2>
                            </div>
                            <div className="mt-5 space-y-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xs font-medium">
                                            Documents
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {order.documents} PDF files
                                        </p>
                                    </div>
                                    <p className="text-xs font-medium">
                                        {order.documents}
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xs font-medium">
                                            Total Pages
                                        </p>

                                        <p className="mt-1 text-[11px] text-gray-400">
                                            Including all copies
                                        </p>
                                    </div>
                                    <p className="text-xs font-medium">
                                        {order.pages}
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-xs text-gray-500">
                                            Printing Amount
                                        </span>

                                        <span className="text-xs font-medium">
                                            ₹{order.amount.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-5">
                            <h2 className="text-sm font-semibold">
                                Payment Method
                            </h2>

                            <p className="text-xs text-gray-400">
                                You will be redirected to secure payment
                                checkout.
                            </p>
                            <div>
                                <div
                                    onClick={() => setPaymentMethod("online")}
                                    className={`mt-4 rounded-lg border-2 py-2 px-4 cursor-pointer ${
                                        paymentMethod === "online"
                                            ? "border-orange-500 bg-orange-50/40"
                                            : "border-gray-200"
                                    }`}
                                >
                                    <div className="flex items-center gap-4 py-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                                            <MdPayment size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold">
                                                Online Payment
                                            </p>
                                            <p className="text-[10px] text-gray-500">
                                                UPI, Cards, Net Banking & more
                                            </p>
                                        </div>

                                        {paymentMethod === "online" && (
                                            <MdCheckCircle
                                                className="ml-auto text-orange-500"
                                                size={19}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div
                                    onClick={() => setPaymentMethod("cash")}
                                    className={`mt-2 rounded-lg border-2 py-2 px-4 cursor-pointer ${
                                        paymentMethod === "cash"
                                            ? "border-orange-500 bg-orange-50/40"
                                            : "border-gray-200"
                                    }`}
                                >
                                    <div className="flex items-center gap-4 py-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                                            <HiOutlineCash size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold">
                                                Cash on Delivery
                                            </p>
                                            <p className="text-[10px] text-gray-500">
                                                Cash, UPI
                                            </p>
                                        </div>

                                        {paymentMethod === "cash" && (
                                            <MdCheckCircle
                                                className="ml-auto text-orange-500"
                                                size={19}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-fit rounded-xl border border-gray-200 bg-white p-5">
                        <h2 className="text-sm font-semibold">
                            Payment Summary
                        </h2>

                        <div className="mt-5 space-y-3">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Documents</span>

                                <span>{order.documents}</span>
                            </div>

                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">
                                    Total Pages
                                </span>

                                <span>{order.pages}</span>
                            </div>

                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        Total
                                    </span>

                                    <span className="text-xl font-semibold text-orange-500">
                                        ₹{order.amount.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 text-xs font-semibold text-white transition hover:bg-orange-600"
                        >
                            <MdLock size={16} />
                            Pay ₹{order.amount.toFixed(2)}
                        </button>

                        <p className="mt-4 text-center text-[10px] text-gray-400">
                            Your payment is processed securely.
                        </p>
                    </div>
                </div>

                <button onClick={()=>navigate('/option')} className="mt-6 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
                    <MdArrowBack size={16} />
                    Back to Printing Options
                </button>
            </div>
        </div>
    );
};

export default PaymentGateway;
