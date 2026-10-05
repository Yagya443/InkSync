import React, { useRef, useState } from "react";
import {
    MdCloudUpload,
    MdDelete,
    MdArrowBack,
    MdArrowForward,
    MdInsertDriveFile,
} from "react-icons/md";

const UploadDocuments = () => {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const handleFiles = (selectedFiles) => {
        const newFiles = Array.from(selectedFiles);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleContinue = () => {
        console.log("Files:", files);

        // Later:
        // navigate("/Shop/1/checkout");
    };

    return (
        <div className="min-h-screen bg-[#f8f8f7] px-6 py-10 text-[#171717]">
            <div className="max-w-7xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-orange-500">
                            ABC Stationery
                        </p>
                        <h1 className="text-2xl font-semibold">
                            Upload your documents
                        </h1>
                        <p className="text-xs text-gray-500">
                            Upload the files you want to print.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500">
                        Step 1 of 3
                    </div>
                </div>

                <div
                    onClick={() => fileInputRef.current.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        handleFiles(e.dataTransfer.files);
                    }}
                    className="mt-4 cursor-pointer rounded-xl border-2 border-dashed border-gray-200 bg-white p-10 text-center transition hover:border-orange-300 hover:bg-orange-50/30"
                >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                        <MdCloudUpload size={30} />
                    </div>

                    <h2 className="mt-2 text-sm font-semibold">
                        Upload your files
                    </h2>

                    <p className="text-xs text-gray-400">
                        Drag and drop your files here or click to browse
                    </p>

                    <p className="mt-2 text-[10px] text-gray-400">
                        PDF, DOCX, JPG, PNG • Maximum 20 MB per file
                    </p>

                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handleFiles(e.target.files)}
                    />
                </div>

                {files.length > 0 && (
                    <div className="mt-4 rounded-xl border border-gray-200 bg-white">
                        <div className="border-b border-gray-100 p-5">
                            <h2 className="text-sm font-semibold">
                                Uploaded Files
                            </h2>

                            <p className="mt-1 text-[11px] text-gray-400">
                                {files.length} file
                                {files.length > 1 ? "s" : ""} selected
                            </p>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {files.map((file, index) => (
                                <div
                                    key={`${file.name}-${index}`}
                                    className="flex items-center justify-between p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                                            <MdInsertDriveFile size={20} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium">
                                                {file.name}
                                            </p>

                                            <p className="text-xs text-gray-400">
                                                {(file.size / 1024 / 1024).toFixed(
                                                    2
                                                )}
                                                MB
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeFile(index)}
                                        className="rounded-md p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                                    >
                                        <MdDelete size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

             <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5">
                    <p className="text-xs font-medium">Printing at</p>

                    <div className="mt-2 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold">
                                ABC Stationery
                            </p>
                            <p className="text-xs text-gray-400">
                                Near TCET • 0.4 km away
                            </p>
                        </div>

                        <button className="text-xs font-medium text-orange-500 hover:text-orange-600">
                            Change
                        </button>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        <MdArrowBack size={16} />
                        Back
                    </button>

                    <button
                        onClick={handleContinue}
                        disabled={files.length === 0}
                        className={`flex items-center gap-2 rounded-lg px-5 py-2 text-xs font-semibold text-white transition ${
                            files.length === 0
                                ? "cursor-not-allowed bg-gray-300"
                                : "bg-orange-500 hover:bg-orange-600"
                        }`}
                    >
                        Continue
                        <MdArrowForward size={16} />
                    </button>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400">
                    Your files are securely sent to the selected print shop.
                </p>
            </div>
        </div>
    );
};

export default UploadDocuments;