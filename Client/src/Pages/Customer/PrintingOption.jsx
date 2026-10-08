import React, { useState } from "react";
import {
    MdArrowBack,
    MdArrowForward,
    MdAdd,
    MdRemove,
    MdInsertDriveFile,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PrintingOption = () => {
    const [files, setFiles] = useState([
        {
            name: "DBMS_Assignment.pdf",
            pages: 36,
            printType: "B&W",
            copies: 1,
            paper: "A4",
            pageSelection: "All",
        },
        {
            name: "CN_Notes.pdf",
            pages: 20,
            printType: "B&W",
            copies: 1,
            paper: "A4",
            pageSelection: "All",
        },
    ]);
    const updateFile = (index, field, value) => {
        setFiles((prevFiles) =>
            prevFiles.map((file, i) =>
                i === index ? { ...file, [field]: value } : file,
            ),
        );
    };
    const totalPages = files.reduce((total, file) => {
        return total + file.pages;
    }, 0);
    const totalCopies = files.reduce((total, file) => {
        return total + file.copies;
    }, 0);
    const totalAmount = files.reduce((total, file) => {
        const pricePerPage = file.printType === "Color" ? 5 : 2;

        return total + file.pages * file.copies * pricePerPage;
    }, 0);

    const navigate=useNavigate()


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
                            Choose printing options for each document.
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
                        {files.map((file, index) => (
                            <div key={file.name} className="p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                                        <MdInsertDriveFile size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold">
                                            {file.name}
                                        </p>
                                        <p className="text-[10px] text-gray-400">
                                            {file.pages} pages
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-4 gap-4">
                                    <div>
                                        <p className="mb-2 text-[11px] font-medium text-gray-600">
                                            Print Type
                                        </p>
                                        <div className="flex rounded-lg border border-gray-200">
                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "printType",
                                                        "B&W",
                                                    )
                                                }
                                                className={`flex-1 rounded-md px-3 py-2 text-xs font-medium ${
                                                    file.printType === "B&W"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                            >
                                                B&W
                                            </button>

                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "printType",
                                                        "Color",
                                                    )
                                                }
                                                className={`flex-1 rounded-md px-3 py-2 text-xs font-medium ${
                                                    file.printType === "Color"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                            >
                                                Color
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-[11px] font-medium text-gray-600">
                                            Copies
                                        </p>

                                        <div className="flex items-center rounded-lg border border-gray-200">
                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "copies",
                                                        Math.max(
                                                            1,
                                                            file.copies - 1,
                                                        ),
                                                    )
                                                }
                                                className="p-2 text-gray-500 hover:bg-gray-50"
                                            >
                                                <MdRemove size={16} />
                                            </button>

                                            <span className="w-full text-center text-xs font-medium">
                                                {file.copies}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "copies",
                                                        file.copies + 1,
                                                    )
                                                }
                                                className="p-2 text-gray-500 hover:bg-gray-50"
                                            >
                                                <MdAdd size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-[11px] font-medium text-gray-600">
                                            Paper Size
                                        </p>

                                        <div className="flex rounded-lg border border-gray-200">
                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "paper",
                                                        "A4",
                                                    )
                                                }
                                                className={`flex-1 rounded-md px-3 py-2 text-xs font-medium ${
                                                    file.paper === "A4"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                            >
                                                A4
                                            </button>

                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "paper",
                                                        "A3",
                                                    )
                                                }
                                                className={`flex-1 rounded-md px-3 py-2 text-xs font-medium ${
                                                    file.paper === "A3"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                            >
                                                A3
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-[11px] font-medium text-gray-600">
                                            Pages
                                        </p>

                                        <div className="flex rounded-lg border border-gray-200">
                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "pageSelection",
                                                        "All",
                                                    )
                                                }
                                                className={`flex-1 rounded-md px-3 py-2 text-xs font-medium ${
                                                    file.pageSelection === "All"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                            >
                                                All
                                            </button>

                                            <button
                                                onClick={() =>
                                                    updateFile(
                                                        index,
                                                        "pageSelection",
                                                        "Custom",
                                                    )
                                                }
                                                className={`flex-1 rounded-md px-3 py-2 text-xs font-medium ${
                                                    file.pageSelection ===
                                                    "Custom"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                            >
                                                Custom
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex justify-end">
                                    <p className="text-xs text-gray-500">
                                        Estimated:{" "}
                                        <span className="font-semibold text-gray-800">
                                            ₹
                                            {(
                                                file.pages *
                                                file.copies *
                                                (file.printType === "Color"
                                                    ? 5
                                                    : 2)
                                            ).toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
                    <h2 className="text-sm font-semibold">Order Summary</h2>

                    <div className="mt-4 space-y-3">
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Documents</span>

                            <span className="font-medium">{files.length}</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Total Pages</span>

                            <span className="font-medium">{totalPages}</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Total Copies</span>

                            <span className="font-medium">{totalCopies}</span>
                        </div>

                        <div className="border-t border-gray-100 pt-3">
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
                    <button onClick={()=>navigate('/upload')} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        <MdArrowBack size={16} />
                        Back
                    </button>

                    <button onClick={()=>navigate('/payment')} className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-xs font-semibold text-white hover:bg-orange-600">
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