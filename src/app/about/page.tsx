"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function About() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setImageLoaded(true), 200);
    }, []);

    return (
        <div className="flex items-center w-full h-screen px-8 bg-gray-100"> {/* Full-screen height with padding */}
            
            {/* Left Side: Text Section */}
            <div className="w-1/2 pr-8"> {/* Takes half of the width */}
                <h1 className="text-[#1E2D3B] font-semibold text-[55px] mb-4 text-center">ABOUT</h1>
                
                {/* Underline */}
                <div className="flex justify-center">
                    <div className="w-[130px] h-2 bg-yellow-500 mb-4"></div> {/* Adjust width as needed */}
                </div>

                <p className="text-lg leading-relaxed text-[#333] mt-6 flex justify-center font-serif">
                    Construction and infrastructure are the backbone of modern society, shaping the environments in which we live, work, and travel. The construction industry encompasses a wide range of activities that involve the planning, design, and building of structures such as residential homes, commercial buildings, bridges, highways, and more. Infrastructure, on the other hand, refers to the essential facilities and systems that support the daily functions of society, including transportation networks, utilities, water systems, and energy grids.

                    Over the years, construction has evolved with advancements in technology, materials, and design, enabling the creation of more efficient, sustainable, and innovative structures. The integration of smart technologies, such as building information modeling (BIM) and green building practices, has revolutionized the construction process, enhancing safety, reducing costs, and minimizing environmental impact.
                </p>
            </div>

            {/* Right Side: Image Section with Animation */}
            <div 
                className={`w-1/2 h-screen overflow-hidden transition-all duration-1000 ${imageLoaded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}
            >
                <Image 
                    src="/construction-img.jpg" 
                    alt="Construction Site" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg" 
                />
            </div>
        </div>
    );
}
