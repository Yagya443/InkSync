import React, { useState } from "react";
import {
    MdStore,
    MdPrint,
    MdNotifications,
    MdSecurity,
    MdSave,
    MdLock,
    MdAdd,
} from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import AddOptionModel from "../../../Components/ShopPartner/AddOptionModel";


const Setting = () => {

    const [toggleModel,setToggleModel]=useState(false)

    return (
        <div className="min-h-screen bg-[#f8f8f7] p-7 text-[#171717]">
            <div className="mb-7">
                <h2 className="text-2xl font-semibold">Settings</h2>

                <p className="text-xs text-gray-500">
                    Manage your InkSync shop and application preferences
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center gap-3 border-b border-gray-100 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <MdStore size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">
                                Shop Profile
                            </h3>
                            <p className="text-xs text-gray-400">
                                Manage your stationery shop information
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 p-5">
                        <InputField label="Shop Name" value="ABC Stationery" />
                        <InputField label="Owner Name" value="Shop Owner" />
                        <InputField label="Email" value="shop@example.com" />
                        <InputField label="Phone" value="+91 98765 43210" />
                        <div className="col-span-2">
                            <InputField
                                label="Shop Address"
                                value="Mumbai, Maharashtra"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end border-t border-gray-100 p-5 gap-4">
                        <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600">
                            <MdSave size={16} />
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center gap-3 border-b border-gray-100 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <MdPrint size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">
                                Printing & Pricing
                            </h3>

                            <p className="text-xs text-gray-400">
                                Configure your printing prices
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 p-5">
                        <InputField label="B&W Printing" value="₹5.00 / page" />
                        <InputField
                            label="Color Printing"
                            value="₹10.00 / page"
                        />
                        <InputField label="Spiral Binding" value="₹20.00" />
                    </div>

                    <div className="flex justify-end border-t border-gray-100 p-5 gap-4">
                        <button onClick={()=>setToggleModel(true)} className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600">
                            <MdAdd size={16} />
                            Add Options
                        </button>

                        <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600">
                            <MdSave size={16} />
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center gap-3 border-b border-gray-100 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <MdPrint size={20} />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold">
                                Order Settings
                            </h3>

                            <p className="text-xs text-gray-400">
                                Control how incoming orders are handled
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <ToggleRow
                            title="Auto Accept Orders"
                            description="Automatically accept incoming print requests"
                            enabled={true}
                        />
                        <ToggleRow
                            title="Allow Orders When Shop Is Closed"
                            description="Allow customers to submit orders when the shop is closed"
                            enabled={false}
                        />
                        <ToggleRow
                            title="New Order"
                            description="Get notified when a new order is received"
                            enabled={true}
                        />
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="flex items-center gap-3 border-b border-gray-100 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <MdSecurity size={20} />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold">Security</h3>
                            <p className="text-xs text-gray-400">
                                Manage your account security
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">Password</p>
                                <p className="mt-1 text-[11px] text-gray-400">
                                    Change your account password
                                </p>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                                <MdLock size={15} />
                                Change Password
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Active Sessions
                                </p>
                                <p className="mt-1 text-[11px] text-gray-400">
                                    Manage devices currently logged into your
                                    account
                                </p>
                            </div>
                            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                                Manage Sessions
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white">
                    {/* HEADER */}
                    <div className="flex items-center gap-3 border-b border-gray-100 p-5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <FaRupeeSign size={20} />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold">Finance</h3>

                            <p className="text-xs text-gray-400">
                                Manage your payouts and payment account
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {/* RAZORPAY ACCOUNT */}
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Razorpay Account
                                </p>

                                <p className="mt-1 text-[11px] text-gray-400">
                                    Account connected to receive payments from
                                    customers
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-600">
                                    Connected
                                </span>

                                <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                                    Manage
                                </button>
                            </div>
                        </div>

                        {/* ACCOUNT HOLDER */}
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Account Holder
                                </p>

                                <p className="mt-1 text-[11px] text-gray-400">
                                    Name registered with your payment account
                                </p>
                            </div>

                            <p className="text-xs font-medium text-gray-700">
                                Yagna Vyas
                            </p>
                        </div>

                        {/* BANK ACCOUNT */}
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Bank Account
                                </p>

                                <p className="mt-1 text-[11px] text-gray-400">
                                    Bank account used for receiving settlements
                                </p>
                            </div>

                            <p className="text-xs font-medium text-gray-700">
                                •••• 4821
                            </p>
                        </div>

                        {/* IFSC */}
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">IFSC Code</p>

                                <p className="mt-1 text-[11px] text-gray-400">
                                    IFSC code of your registered bank account
                                </p>
                            </div>

                            <p className="text-xs font-medium text-gray-700">
                                HDFC0001234
                            </p>
                        </div>

                        {/* TOTAL EARNINGS */}
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Total Earnings
                                </p>

                                <p className="mt-1 text-[11px] text-gray-400">
                                    Total amount earned through InkSync
                                </p>
                            </div>

                            <p className="text-sm font-semibold text-green-600">
                                ₹4,320
                            </p>
                        </div>

                        {/* PAYOUTS */}
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">Payouts</p>

                                <p className="mt-1 text-[11px] text-gray-400">
                                    View your payment settlements and payout
                                    history
                                </p>
                            </div>

                            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                                View Payouts
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-red-200 bg-white">
                    <div className="border-b border-red-100 p-5">
                        <h3 className="text-sm font-semibold text-red-500">
                            Danger Zone
                        </h3>
                        <p className="mt-1 text-xs text-gray-400">
                            Actions in this section can affect your shop
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-5">
                        <div>
                            <p className="text-xs font-medium">
                                Temporarily Disable Shop
                            </p>
                            <p className="mt-1 text-[11px] text-gray-400">
                                Stop receiving new orders temporarily
                            </p>
                        </div>
                        <button className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50">
                            Disable Shop
                        </button>
                    </div>
                </div>
            </div>

            {
                toggleModel && <AddOptionModel setToggleModel={setToggleModel}/>
            }

        </div>
    );
};

export default Setting;

function InputField({ label, value }) {
    return (
        <div>
            <label className="mb-1 block text-[11px] font-medium text-gray-500">
                {label}
            </label>

            <input
                type="text"
                defaultValue={value}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs text-gray-700 outline-none transition focus:border-orange-400"
            />
        </div>
    );
}

function ToggleRow({ title, description, enabled }) {
    return (
        <div className="flex items-center justify-between p-5">
            <div>
                <p className="text-xs font-medium">{title}</p>

                <p className="text-[11px] text-gray-400">{description}</p>
            </div>

            <div
                className={`relative h-5 w-9 rounded-full transition ${
                    enabled ? "bg-orange-500" : "bg-gray-200"
                }`}
            >
                <div
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        enabled ? "left-4.5" : "left-0.5"
                    }`}
                />
            </div>
        </div>
    );
}
