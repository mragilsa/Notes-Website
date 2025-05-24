import React from "react";

const EmptyCart = ({ title, message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-base text-gray-600 max-w-md">
                {message}
            </p>
        </div>
    );
}

export default EmptyCart;