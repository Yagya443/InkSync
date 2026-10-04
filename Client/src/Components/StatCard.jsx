import React from "react";

const StatCard = ({title, value }) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">{title}</p>

            <p className={`text-2xl font-semibold "text-orange-500`}>
                {value}
            </p>
        </div>
    );
};

export default StatCard;
