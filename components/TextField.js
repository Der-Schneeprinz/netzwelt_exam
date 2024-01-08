import React from "react";

const TextField = ({ floatingText, autocomplete, type }) => {
    return (
        <>
            <div className="relative">
                <input
                type={type}
                id={floatingText}
                autoComplete={autocomplete}
                className="block px-2 py-4 w-full
                    text-sm text-gray-900
                    bg-transparent rounded-lg
                    border-2 border-gray-300 appearance-none focus:border-red-600
                    focus:outline-none focus:ring-0 peer"
                placeholder=" "
                />
                <label
                htmlFor={floatingText}
                className="absolute px-2 peer-focus:px-2
                    bg-gray-100 
                    text-sm text-white-500 peer-focus:text-red-700
                    duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:-translate-y-1/2
                    peer-placeholder-shown:scale-100  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 rtl:peer-focus:left-auto start-1"
                >
                {floatingText}
                </label>
            </div>
        </>
    );
};

export default TextField;
