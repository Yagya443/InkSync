import React, { useState } from "react";
import {
    MdArrowBack,
    MdArrowForward,
    MdAdd,
    MdRemove,
    MdInsertDriveFile,
} from "react-icons/md";

const PrintingOption = () => {
    const [printType, setPrintType] = useState("B&W");
    const [copies, setCopies] = useState(1);
    const [paper, setPaper] = useState("A4");
    const [pages, setPages] = useState("All");

    const files = [
        {
            name: "DBMS_Assignment.pdf",
            pages: 36,
        },
        {
            name: "CN_Notes.pdf",
            pages: 20,
        },
    ];

    const totalPages = files.reduce((total, file) => total + file.pages, 0);
    const pricePerPage = printType === "Color" ? 5 : 2;
    const totalAmount = totalPages * copies * pricePerPage;

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-orange-500">
                            ABC Stationery
                        </p>

                        <h1 className="text-2xl font-semibold">
                            Printing Options
                        </h1>

                        <p className="text-xs text-gray-500">
                            Choose how you want your documents to be printed.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500">
                        Step 2 of 3
                    </div>
                </div>

                <div className="mt-7 rounded-xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-100 p-5">
                        <h2 className="text-sm font-semibold">
                            Selected Documents
                        </h2>

                        <p className="text-xs text-gray-400">
                            {files.length} documents • {totalPages} total pages
                        </p>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {files.map((file) => (
                            <div
                                key={file.name}
                                className="flex items-center justify-between p-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                                        <MdInsertDriveFile size={19} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium">
                                            {file.name}
                                        </p>

                                        <p className="text-[10px] text-gray-400">
                                            {file.pages} pages
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs font-medium text-gray-600">
                                    {file.pages} pages
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 rounded-xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-100 p-5">
                        <h2 className="text-sm font-semibold">
                            Print Settings
                        </h2>

                        <p className="text-xs text-gray-400">
                            Select your preferred printing options.
                        </p>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Print Type
                                </p>
                                <p className="text-xs text-gray-400">
                                    Choose between black & white or color
                                </p>
                            </div>

                            <div className="flex rounded-lg border border-gray-200">
                                <button
                                    onClick={() => setPrintType("B&W")}
                                    className={`rounded-md px-4 py-2 text-xs font-medium ${
                                        printType === "B&W"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    B&W
                                </button>
                                <button
                                    onClick={() => setPrintType("Color")}
                                    className={`rounded-md px-4 py-2 text-xs font-medium ${
                                        printType === "Color"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    Color
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Number of Copies
                                </p>

                                <p className="text-xs text-gray-400">
                                    How many copies do you need?
                                </p>
                            </div>

                            <div className="flex items-center rounded-lg border border-gray-200">
                                <button
                                    onClick={() =>
                                        setCopies(Math.max(1, copies - 1))
                                    }
                                    className="p-2 text-gray-500 hover:bg-gray-50"
                                >
                                    <MdRemove size={16} />
                                </button>

                                <span className="w-8 text-center text-xs font-medium">
                                    {copies}
                                </span>

                                <button
                                    onClick={() => setCopies(copies + 1)}
                                    className="p-2 text-gray-500 hover:bg-gray-50"
                                >
                                    <MdAdd size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">
                                    Paper Size
                                </p>

                                <p className="text-[10px] text-gray-400">
                                    Select the paper size
                                </p>
                            </div>

                            <div className="flex rounded-lg border border-gray-200">
                                <button
                                    onClick={() => setPaper("A4")}
                                    className={`rounded-md px-4 py-2 text-xs font-medium ${
                                        paper === "A4"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    A4
                                </button>

                                <button
                                    onClick={() => setPaper("A3")}
                                    className={`rounded-md px-4 py-2 text-xs font-medium ${
                                        paper === "A3"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    A3
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-5">
                            <div>
                                <p className="text-xs font-medium">Pages</p>
                                <p className="text-xs text-gray-400">
                                    Choose which pages to print
                                </p>
                            </div>
                            <div className="flex rounded-lg border border-gray-200">
                                <button
                                    onClick={() => setPages("All")}
                                    className={`rounded-md px-4 py-2 text-xs font-medium ${
                                        pages === "All"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    All Pages
                                </button>

                                <button
                                    onClick={() => setPages("Custom")}
                                    className={`rounded-md px-4 py-2 text-xs font-medium ${
                                        pages === "Custom"
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-500 hover:bg-gray-50"
                                    }`}
                                >
                                    Custom
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5">
                    <h2 className="text-sm font-semibold">Order Summary</h2>

                    <div className="mt-4 space-y-3">
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Total Pages</span>

                            <span className="font-medium">{totalPages}</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Copies</span>

                            <span className="font-medium">{copies}</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Print Type</span>

                            <span className="font-medium">{printType}</span>
                        </div>

                        <div className="border-t border-gray-100 pt-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">
                                    Estimated Total
                                </span>

                                <span className="text-xl font-semibold text-orange-500">
                                    ₹{totalAmount.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        <MdArrowBack size={16} />
                        Back
                    </button>

                    <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-xs font-semibold text-white hover:bg-orange-600">
                        Continue to Payment
                        <MdArrowForward size={16} />
                    </button>
                </div>

                <p className="mt-8 text-center text-[11px] text-gray-400">
                    Prices are calculated based on the selected print options.
                </p>
            </div>
        </div>
    );
};

export default PrintingOption;
