import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
    return (
        <nav className="flex w-full h-24">
            {/* Left Section: Yellow background with brand information */}
            <div className="flex items-center bg-[#EDCD1F] w-1/3 pl-4">
                <i className="fa-solid fa-helmet-safety text-[#1E2D3B] text-5xl mr-3"></i>
                <div className="text-[#1E2D3B] font-sans">
                    <h3 className="font-bold" style={{ fontSize: '23px', marginBottom: '-8px' }}>SPHERE</h3>
                    <h3 style={{ fontSize: '23px', marginTop: '-8px' }}>CONSTRUCTIONS</h3>
                </div>
            </div>

            {/* Right Section: Blue background with navigation links */}
            <div className="flex items-center bg-[#0b1547] w-2/3 space-x-6 pr-6 justify-evenly">
                <Link href="/" className="text-white hover:text-[#EDCD1F]">HOME</Link>
                <Link href="/about" className="text-white hover:text-[#EDCD1F]">ABOUT</Link>
                <Link href="/services" className="text-white hover:text-[#EDCD1F]">SERVICES</Link>
                <Link href="/contacts" className="text-white hover:text-[#EDCD1F]">CONTACTS</Link>
            </div>
        </nav>
    );
}

