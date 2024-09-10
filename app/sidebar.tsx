'use client'
import React, { useState } from 'react'
import { FaBars, FaCog, FaHome, FaTimes, FaUser } from 'react-icons/fa';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col h-screen bg-primary text-white ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
            <button
                className="p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Toggle Button */}
                <span>{isOpen ? <FaTimes /> : <FaBars />}</span>
            </button>
            <nav className="flex flex-col space-y-4 mt-4">
                <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                    <FaHome className="mr-4" />
                    {isOpen && <span>Home</span>}
                </a>
                <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                    <FaUser className="mr-4" />
                    {isOpen && <span>Profile</span>}
                </a>
                <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                    <FaCog className="mr-4" />
                    {isOpen && <span>Settings</span>}
                </a>
            </nav>
        </div>
    )
}
