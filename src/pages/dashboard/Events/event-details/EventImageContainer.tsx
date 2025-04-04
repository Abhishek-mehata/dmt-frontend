import React, { useState, useEffect, useRef } from 'react'


// Images for hero-container
import Right1 from "./images/r1.jpg"
import Right2 from "./images/r2.jpg"
import Right3 from "./images/r3.jpg"
import Right4 from "./images/r4.jpg"
import Left1 from "./images/l1.jpg"


// Coursel Images for Mobile hero-container
import coursel1 from "./images/coursel-images/coursel1.jpg"
import coursel2 from "./images/coursel-images/coursel2.jpg"
import coursel3 from "./images/coursel-images/coursel3.jpg"
import coursel4 from "./images/coursel-images/coursel4.jpg"


const images = [coursel1, coursel2, coursel3, coursel4];

const EventImageContainer = () => {
    const [index, setIndex] = useState(0);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    // Function to show the image
    const showImg = (newIndex: number) => {
        if (newIndex >= images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;
        setIndex(newIndex);
    };


    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            showImg(index + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <>

            {/* Image cauorsel / Images container */}
            <div className="child2  ">
                {/* Desktop Hero */}
                <div className="hidden lg:flex desktop-hero  items-center justify-between gap-1 flex-wrap w-[100%] h-[500px] p-2 my-2 bg-transparent">
                    {/* Left Hero-container */}
                    <div className="left w-[49%] h-[99%]  bg-red-400 border-[1.7px] border-[#a19b9b]"> <img className="object-cover h-[100%] w-[100%]" src={Left1} alt="" /> </div>

                    {/* Right Hero-container */}
                    <div className="right flex overflow-y-scroll gap-[5px] flex-wrap justify-center items-center w-[49%] h-[99%]  bg-transparent">
                        {/* SubChild Images for right side image */}
                        <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right1} alt="" /></div>
                        <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right2} alt="" /></div>
                        <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right3} alt="" /></div>
                        <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right4} alt="" /></div>
                    </div>
                </div>

                {/* Mobile Hero/ {Image Coursel} */}
                <div className="container lg:hidden flex relative w-[80%] max-w-[600px] mx-auto my-4 overflow-hidden">
                    <div
                        className="image-wrapper flex transition-transform duration-500"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                        ref={imageWrapperRef}
                    >
                        {images.map((img, i) => (
                            <img key={i} className="w-[100%] h-auto" src={img} alt={`Slide ${i + 1}`} />
                        ))}
                    </div>
                    {/* Previous and next buttons */}
                    <button
                        className="btn prev w-[50px] h-[50px] absolute top-[50%] text-white rounded-full -translate-y-1/2 p-[10px] text-[16px] cursor-pointer bg-[#00000080] hover:bg-[#000000cc] left-1" onClick={() => showImg(index - 1)}
                    >
                        ＜
                    </button>

                    <button
                        className="btn prev w-[50px] h-[50px] absolute top-[50%] text-white rounded-full -translate-y-1/2 p-[10px] text-[16px] cursor-pointer bg-[#00000080] hover:bg-[#000000cc] right-1" onClick={() => showImg(index + 1)}
                    >
                        ＞
                    </button>
                </div>
            </div>
        </>
    )
}

export default EventImageContainer