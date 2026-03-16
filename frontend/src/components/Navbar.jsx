import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="w-full bg-gray-900 text-white shadow-md">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-14">

                    {/* Logo */}
                    <h1 className="text-lg sm:text-xl font-bold">
                        Dashboard Builder
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 text-sm lg:text-base">
                        <Link className="hover:text-gray-300" to="/">Dashboard</Link>
                        <Link className="hover:text-gray-300" to="/orders">Customer Orders</Link>
                        <Link className="hover:text-gray-300" to="/configure">Configure Dashboard</Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pb-4 pt-2 space-y-2">
                    <Link
                        className="block hover:text-gray-300"
                        to="/"
                        onClick={() => setIsOpen(false)}
                    >
                        Dashboard
                    </Link>

                    <Link
                        className="block hover:text-gray-300"
                        to="/orders"
                        onClick={() => setIsOpen(false)}
                    >
                        Customer Orders
                    </Link>

                    <Link
                        className="block hover:text-gray-300"
                        to="/configure"
                        onClick={() => setIsOpen(false)}
                    >
                        Configure Dashboard
                    </Link>
                </div>
            )}

        </nav>
    );
}