"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Image with fade-in effect */}
      <Image
        src="/construction.jpg"
        alt="Construction Site"
        layout="fill"
        objectFit="cover"
        priority
        className={`transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Text overlay on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold animate__animated animate__fadeIn animate__delay-1s transition-transform transform hover:scale-105 hover:text-gray-700 hover:shadow-xl">
          LEADERS IN QUALITY
          <br />
          CONSTRUCTION AND
          <br />
          INFRASTRUCTURE
        </h3>
      </div>
    </div>
  );
}
