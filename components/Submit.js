"use client";

import { useFormStatus } from 'react-dom';
import "@styles/globals.css";

const Submit = ({ action }) => {

    const status = useFormStatus();

    return (
        <button type="submit"
            aria-live="polite"
            role="status"
            disabled={status.pending}
            className="bg-red-500 hover:bg-red-700
            text-white font-bold
            py-2 px-4 rounded-full
            w-full
            disabled:bg-orange-700 disabled:text-gray-400
            invalid:border-red-900 invalid:text-gray-500
            focus:outline-none focus:shadow-outline">
            {status.pending ? action + "...": action}
        </button>
    );
};

export default Submit;
