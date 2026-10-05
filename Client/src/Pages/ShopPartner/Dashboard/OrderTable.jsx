import React from "react";

const OrderTable = ({orders}) => {
    

    return (
        <>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400">
                        <th className="pb-3 font-medium">Order ID</th>
                        <th className="pb-3 font-medium">User</th>
                        <th className="pb-3 font-medium">Pages</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order.id}
                            className="border-b border-gray-50 last:border-none"
                        >
                            <td className="py-3 text-xs font-medium">
                                {order.id}
                            </td>
                            <td className="py-3 text-xs text-gray-500">
                                {order.user}
                            </td>
                            <td className="py-3 text-xs text-gray-500">
                                {order.pages}
                            </td>
                            <td className="py-3 text-xs font-medium">
                                {order.amount}
                            </td>
                            <td className="py-3">
                                <StatusBadge status={order.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default OrderTable;

function StatusBadge({ status }) {
    const styles = {
        Pending: "bg-orange-50 text-orange-500",
        Ready: "bg-green-50 text-green-600",
        Printing: "bg-blue-50 text-blue-500",
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
