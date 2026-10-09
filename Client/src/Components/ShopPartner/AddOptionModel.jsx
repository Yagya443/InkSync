import React from "react";

const AddOptionModel = ({ setToggleModel }) => {
    return (
        <div className="fixed z-40 inset-0 flex items-center justify-center bg-black/50">
            <div className="w-72 rounded-xl bg-white p-5">
                <h2 className="mb-2 text-sm font-semibold text-gray-800">
                    Add Option
                </h2>
                <div className="mb-2">
                    <label className="mb-1 block text-[11px] font-medium text-gray-500">
                        Option Name
                    </label>
                    <input
                        type="text"
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 outline-none transition focus:border-orange-400"
                        placeholder="Enter option"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-[11px] font-medium text-gray-500">
                        Value
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 outline-none transition focus:border-orange-400"
                        placeholder="Enter value"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => setToggleModel(false)}
                        className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600"
                    >
                        Cancel
                    </button>

                    <button className="rounded-lg bg-orange-500 px-4 py-2 text-xs font-medium text-white hover:bg-orange-600">
                        Add Option
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddOptionModel;
