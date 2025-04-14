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



// const EventImageContainer = ({event}) => {
//     console.log(event, 'event');
//     const [index, setIndex] = useState(0);
//     const imageWrapperRef = useRef<HTMLDivElement>(null);

//     // Function to show the image
//     const showImg = (newIndex: number) => {
//         if (newIndex >= images.length) newIndex = 0;
//         if (newIndex < 0) newIndex = images.length - 1;
//         setIndex(newIndex);
//     };


//     // Auto-slide every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             showImg(index + 1);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [index]);

//     return (
//         <>

//             {/* Image cauorsel / Images container */}
//             <div className="child2  ">
//                 {/* Desktop Hero */}
//                 <div className="hidden lg:flex desktop-hero  items-center justify-between gap-1 flex-wrap w-[100%] h-[500px] p-2 my-2 bg-transparent">
//                     {/* Left Hero-container */}
//                     <div className="left w-[49%] h-[99%]  bg-red-400 border-[1.7px] border-[#a19b9b]"> <img className="object-cover h-[100%] w-[100%]" src={Left1} alt="" /> </div>

//                     {/* Right Hero-container */}
//                     <div className="right flex overflow-y-scroll gap-[5px] flex-wrap justify-center items-center w-[49%] h-[99%]  bg-transparent">
//                         {/* SubChild Images for right side image */}
//                         <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right1} alt="" /></div>
//                         <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right2} alt="" /></div>
//                         <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right3} alt="" /></div>
//                         <div className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]"> <img className="object-cover h-[100%] w-[100%]" src={Right4} alt="" /></div>
//                     </div>
//                 </div>

//                 {/* Mobile Hero/ {Image Coursel} */}
//                 <div className="container lg:hidden flex relative w-[80%] max-w-[600px] mx-auto my-4 overflow-hidden">
//                     <div
//                         className="image-wrapper flex transition-transform duration-500"
//                         style={{ transform: `translateX(-${index * 100}%)` }}
//                         ref={imageWrapperRef}
//                     >
//                         {images.map((img, i) => (
//                             <img key={i} className="w-[100%] h-auto" src={img} alt={`Slide ${i + 1}`} />
//                         ))}
//                     </div>
//                     {/* Previous and next buttons */}
//                     <button
//                         className="btn prev w-[50px] h-[50px] absolute top-[50%] text-white rounded-full -translate-y-1/2 p-[10px] text-[16px] cursor-pointer bg-[#00000080] hover:bg-[#000000cc] left-1" onClick={() => showImg(index - 1)}
//                     >
//                         ＜
//                     </button>

//                     <button
//                         className="btn prev w-[50px] h-[50px] absolute top-[50%] text-white rounded-full -translate-y-1/2 p-[10px] text-[16px] cursor-pointer bg-[#00000080] hover:bg-[#000000cc] right-1" onClick={() => showImg(index + 1)}
//                     >
//                         ＞
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }
interface Event {
    files?: { url?: string; location?: string }[];
}

const EventImageContainer = ({ event }: { event: Event }) => {
    // console.log(event, 'event');

    const [index, setIndex] = useState(0);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    // Extract dynamic images from event.files
    const dynamicImages = (event?.files ?? []).length > 0
        ? (event.files ?? []).map((file: { url?: string; location?: string }) => file?.url || file?.location || '') // fallback to either key
        : [];

    const hasDynamicImages = dynamicImages.length > 0;

    const mobileImages: string[] = hasDynamicImages ? dynamicImages : [coursel1, coursel2, coursel3, coursel4];
    const desktopLeftImage = hasDynamicImages ? dynamicImages[0] : Left1;
    const desktopRightImages = hasDynamicImages
        ? dynamicImages.slice(1, 5)
        : [Right1, Right2, Right3, Right4];

    // Show image by index for mobile
    const showImg = (newIndex: number) => {
        if (newIndex >= mobileImages.length) newIndex = 0;
        if (newIndex < 0) newIndex = mobileImages.length - 1;
        setIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            showImg(index + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="child2">
            {/* Desktop Hero */}
            <div className="hidden lg:flex desktop-hero items-center justify-between gap-1 flex-wrap w-full h-[500px] p-2 my-2 bg-transparent">
                {/* Left Image */}
                <div className="left w-[49%] h-[99%] bg-red-400 border-[1.7px] border-[#a19b9b]">
                    <img className="object-cover h-full w-full" src={desktopLeftImage} alt="Main" />
                </div>

                {/* Right Grid Images */}
                <div className="right flex overflow-y-scroll gap-[5px] flex-wrap justify-center items-center w-[49%] h-[99%] bg-transparent">
                    {desktopRightImages.map((img: string, i: number) => (
                        <div key={i} className="w-[49%] max-w-[90%] h-[49%] bg-white p-[4px] rounded-[4px]">
                            <img className="object-cover h-full w-full" src={img} alt={`Side ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Carousel */}
            <div className="container lg:hidden flex relative w-[80%] max-w-[600px] mx-auto my-4 overflow-hidden">
                <div
                    className="image-wrapper flex transition-transform duration-500"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    ref={imageWrapperRef}
                >
                    {mobileImages.map((img: string, i: number) => (
                        <img key={i} className="w-full h-auto" src={img} alt={`Slide ${i + 1}`} />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className="btn prev w-[50px] h-[50px] absolute top-[50%] text-white rounded-full -translate-y-1/2 p-[10px] text-[16px] cursor-pointer bg-[#00000080] hover:bg-[#000000cc] left-1"
                    onClick={() => showImg(index - 1)}
                >
                    ＜
                </button>

                <button
                    className="btn next w-[50px] h-[50px] absolute top-[50%] text-white rounded-full -translate-y-1/2 p-[10px] text-[16px] cursor-pointer bg-[#00000080] hover:bg-[#000000cc] right-1"
                    onClick={() => showImg(index + 1)}
                >
                    ＞
                </button>
            </div>
        </div>
    );
};

export default EventImageContainer