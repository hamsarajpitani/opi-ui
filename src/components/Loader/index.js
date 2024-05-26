import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
    return (
        <div class="flex items-center justify-center min-h-screen min-w-screen">
            <AiOutlineLoading3Quarters size={50} className="animate-spin text-primary" />
        </div>
    )
}

export default Loader