import React from "react";
// import ny from "../../../assets/images/starting_city_1.jpg";

const TopDestinationsCard = ({ src , cityName} ) => {
    return (
        <a href="#" className="">
            <div
                className="relative w-[300px] xs:w-[400px] sm:w-[450px] md:w-[350px] lg:w-[300px] xl:w-[400px]   mx-2 h-[200px] shadow-lg rounded-[13px] bg-cover bg-center overflow-hidden group"
                style={{ backgroundImage: `url(${src})` }}
             >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Title */}
                <h2 className="absolute bottom-4 left-4 text-[30px] leading-[32px] text-white font-semibold z-10">
                    {/* NEW YORK */}
                    {cityName}
                </h2>
            </div>
        </a>
    );
};

export default TopDestinationsCard;
