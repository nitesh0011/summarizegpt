import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100  shadow-md bg-gradient-to-r from-blue-100 to-green-100">
                <div className="flex items-center justify-around">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full">
                        <Image alt="Summarify Icon" src="/summarify.png" width="70" height="70" className="object-cover" />
                    </div>
                </div>
                <div className="flex-none ml-auto">
                    Profile
                </div>
            </div>
        </div>
    )
}

export default Navbar
