import Image from 'next/image';

export default function Services() {
    return (
        <div className="flex flex-col items-center mt-12 space-y-8">
            {/* Main Heading */}
            <h1 className="text-[#1E2D3B] font-semibold text-[55px] mb-0 text-center">SERVICES</h1>

            {/* Underline */}
            <div className="w-[176px] h-2 bg-yellow-500 mb-8"></div>

            {/* Services Container */}
            <div className="flex justify-center space-x-10 max-w-7xl mx-auto">
                {/* Service Item */}
                <div className="flex flex-col items-center w-[350px] group">
                    <Image 
                        src="/preconstruction-planning.jpg" 
                        alt="Pre-construction Planning" 
                        width={350} 
                        height={250} 
                        className="w-full h-[250px] object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <h2 className="text-[#3D5975] text-2xl font-semibold text-center mb-2">
                        Preconstruction <br /> Planning
                    </h2>
                    <p className="text-justify leading-relaxed">
                        Pre-construction planning is a crucial phase in architecture, laying the foundation for the successful execution of a project. It involves comprehensive preparation and coordination, including site analysis, budgeting, scheduling, and risk assessment.
                    </p>
                </div>

                {/* Service Item */}
                <div className="flex flex-col items-center w-[350px] group">
                    <Image 
                        src="/architectural-modelling.jpg" 
                        alt="Architectural Modelling" 
                        width={350} 
                        height={250} 
                        className="w-full h-[250px] object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <h2 className="text-[#3D5975] text-2xl font-semibold text-center mb-2">
                        Architectural <br /> Modelling
                    </h2>
                    <p className="text-justify leading-relaxed">
                        Architectural modeling is a vital process in architecture that involves creating digital or physical representations of a building or structure. This allows architects to visualize and refine their designs before construction begins.
                    </p>
                </div>

                {/* Service Item */}
                <div className="flex flex-col items-center w-[350px] group">
                    <Image 
                        src="/construction-management.jpg" 
                        alt="Construction Management" 
                        width={350} 
                        height={250} 
                        className="w-full h-[250px] object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <h2 className="text-[#3D5975] text-2xl font-semibold text-center mb-2">
                        Construction <br /> Management
                    </h2>
                    <p className="text-justify leading-relaxed">
                        Construction management in architecture involves overseeing and coordinating the entire building process from start to finish, ensuring that design plans are realized accurately, on time, and within budget.
                    </p>
                </div>
            </div>
        </div>
    );
}
