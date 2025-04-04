import React from "react";
import { useState, useRef } from "react";

//Sub components
import EventRewiews from "./EventsReview"
import EventImageContainer from "./EventImageContainer";
import UserProfile from "./UserProfile";
import TypeAndLocation from "./TypeAndLocation";

// importing css
import "./Details.css"

// import { ShareIcon } from "lucide-react";
import bwClock from "../../../../assets/svg/bw-clock.png"
import BoxTick from "../../../../assets/svg/box_tick.svg"

import Details from "./Details";
import RoomsCard from "./RoomsCard";
import GoodToKnow from "./GoodToKnow";
// import starImg from "../../../../assets/svg/star.svg"
type EventDetailsProps = {
    title: string;
    date: string;
    location: string;
};


const EventDetails: React.FC<EventDetailsProps> = () => {

    const ref1 = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)

    const [price, setPrice] = useState(0)
    const [count, setCount] = useState(true)
    // const [numberOfEvents, setNumberOfEvents] = useState(0)

    const StickyDivChange = () => {
        if (count === true) {
            return ref2.current?.classList.add("lg:block");
        } else if (count === false) {
            return ref2.current?.classList.remove("lg:block");
        }
    };

    const StickyDivChange2 = () => {
        if (!count === true) {
            return ref1.current?.classList.add("lg:block");
        } else if (!count === false) {
            return ref1.current?.classList.remove("lg:block");
        }
    };
    return (
        <>
{/* -----the sticky divs----- */}

<div className=" h-[202vh] w-full md:px-16 absolute top-36 left-7 md:top-[1020px] lg:top-[600px] flex justify-between mt-6 ">
        {/* lines & buttons---- */}
        <div className=" bg-white place-content-center  -ml-1   md:pl-20 lg:w-[68%] md:w-[95%] border-zinc-300 w-[91%] sticky top-[60px]  z-10 md:h-[102px] h-[93px] border-b border-t ">
          <div className="font-semibold text-sm flex gap-3 transition-all px-1 md:gap-8 md:text-xl  ">
            <a
              href="#description"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl "
            >
              Details
            </a>
            <a
              href="#room"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl"
            >
              Room
            </a>
            <a
              href="#info"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl"
            >
              Info
            </a>
            <a
              href="#reviews"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl"
            >
              Reviews
            </a>
          </div>
        </div>
        {/* lines & buttons end ---- */}

        {/* sticky div for room selection */}

        <div
          ref={ref1}
          className="hidden lg:block max-w-[400px] mt-7 pt-5 sticky top-[140px] z-10 w-[30%] mr-14
         h-[120px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] p-4 "
        >
          <h1 className="font-semibold text-lg ">Select room for pricing</h1>
          <p className="pt-5 text-sm ">
            Free cancellation until{" "}
            <span className="text-[#9427F7]"> May 28, 2025</span>
          </p>
        </div>

        <div
          ref={ref2}
          className=" hidden sticky top-[140px] max-w-[350px] mt-7 pt-5 z-10 w-[30%] mr-20
         h-[340px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] "
        >
          <div className=" border-b border-zinc-300 px-4">
            <h1 className="font-semibold text-lg ">NPR500.00</h1>
          </div>
          <div className="flex justify-between border-b border-zinc-300 px-4 ">
            <p className="py-2 text-sm ">test product</p>
            <p className="py-2 text-sm ">NPR500.00</p>
          </div>
          <div className="flex justify-between border-b border-zinc-300 px-4 ">
            <p className="py-2 text-sm ">Total</p>
            <p className="py-2 text-sm ">NPR500.00</p>
          </div>
          <div className="flex flex-col  items-center  mt-4 gap-4 text-white ">
            <button className="p-3 shadow-md shadow-[#bab9c6]  bg-[#9427F7] rounded ">
              Request to Book
            </button>

            <p className="w-[80%] flex text-center justify-center items-center text-black ">
              You’ll be able to review before paying.
            </p>

            <div className="inline-flex gap-4">
              <a
                href=""
                className="bg-blue-600 shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md p-1"
              >
                {/* <FaFacebook /> */}
                Share
              </a>
              <a
                href=""
                className="bg-black shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md p-1"
              >
                {/* <FaXTwitter /> */}
                Post
              </a>
              <a
                href=""
                className="bg-blue-800 shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md p-1"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* -----the sticky divs----- end */}
            <div className="parent h-auto  w-[calc(100vw - 81px)] p-[32px] overflow-y-scroll my-1 bg-green-0">

                {/* Event Type and location start */}
                <div className="child1 flex justify-between items-center flex-col xs:flex-row mt-20px">
                    <TypeAndLocation />
                </div>
                {/* Event Type and location end */}


                {/* Image Container start */}
                <div>
                    <EventImageContainer />
                </div>
                {/* Image Container End */}


                <section className="mx-[auto]">
                    <div className="wrapper flex flex-wrap">

                        {/* column1 */}
                        <div className="column1 w-[100%] sc:w-[67%] px-[15px]  relative">
                            {/* sub-navbar*/}
                            {/* <nav className="w-fit  flex items-center justify-between bg-white border-y border-[#c1c7d0] py-[15px] my-0 px-2 ">
                            <ul className="flex gap-[18px]">
                                <li className=""><a href="#details" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Details</a></li>
                                <li className=""><a href="#dateandtime" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Available Date & Time</a></li>
                                <li className=""><a href="#info" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Info</a></li>
                                <li className=""><a href="#reviews" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Reviews</a></li>
                            </ul>
                        </nav> */}
                        <div className="mb-[200px]"></div>

                            {/* Profile start */}
                            <div id="details" className="profile mt-[10px]">
                                <UserProfile />
                            </div>
                            {/* Profile end */}

                            {/* Details Div */}
                            <div id="details" className="scroll-mt-[83px] pb-[40px] mt-[30px] border-b-[2px]   border-solid border-[#96969640]">
                                <Details />
                            </div>
                            {/* Details  End */}

                            {/* Event Dates */}
                            <div id="dateandtime" className="my-[30px] pb-[40px] border-b-[1.5px] border-solid border-[#96969640] ">
                                <h3 className="text-[27.34px] font-medium leading-[40px] tracking-[-1px]">Event Dates</h3>

                                <div className="row flex flex-wrap pt-[15px] mx-0">

                                    {/* card 1 */}
                                    <div className="pl-0 mb-[15px] w-[100%] md:w-1/2">
                                        <div className="choose-dates bg-[#F4F4F4] b1 rounded-7px py-[1.75rem] px-[1.5rem]">
                                            <h4 className="text-[17.5px] text-[#172B4D] font-medium leading-[26.25px]  mb-[5px]">Thu, 20th Feb 2025</h4>
                                            <div className="row2 flex flex-wrap py-1 mx-0">
                                                <div className="relative max-w-[100%] w-[100%] flex basis-[100%] pr-[15px] ">
                                                    <img className="h-[20px] w-[20px] align-middle" src={bwClock} alt="" />
                                                    <span className="text-[14px] font-[300] leading-[21px] text-[#434859] ml-2">06:01AM - 05:06PM</span>
                                                </div>
                                                {/* Time part end */}

                                                <div className="py-[5px] flex ">
                                                    <img className="w-[20px] h-[20px] align-middle" src={BoxTick} alt="" />
                                                    <span className="text-[14px] font-[300] leading-[21px] text-[#434859] ml-2">onsite</span>
                                                </div>
                                                {/* BoxTick Part end */}

                                                {/* Price details and <reserve> button */}

                                                <div
                                                    /// <reference path="" />
                                                    // ref={ref1}

                                                    className="w-[100%] flex gap-3 my-2 justify-center xsss:justify-between flex-wrap py-[5px]">

                                                    <div className="left">
                                                        <p className="m-0 text-[21.88px] font-medium leading-[32px] text-[#172B4D]">NPR 25,000</p>
                                                        <span className="text-[12px] leading-[12px] font-[300] text-[#172B4D]">/Per Person</span>
                                                    </div>
                                                    <div className="right">

                                                        {/* <button className="reserve-btn mt-[10px]"
                                                        onClick={(e) => {
                                                            let currentPrice = 25000;
                                                            setPrice((prevPrice) => (prevPrice + currentPrice));
                                                            // console.log(price)
                                                            setCount(!count);
                                                            StickyDivChange()
                                                            StickyDivChange2()


                                                        }}
                                                    >Reserve</button> */}
                                                        {count ? (
                                                            <button
                                                                onClick={() => {
                                                                    {
                                                                        count ? setCount(false) : setCount(true);
                                                                        StickyDivChange();
                                                                        StickyDivChange2();
                                                                    }
                                                                }}
                                                                className="bg-[#9427F7] shadow-md shadow-[#bab9c6] text-white font-semibold rounded-xl p-[10px] px-[14px] text-sm"
                                                            >
                                                                Reserve
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={() => {
                                                                    {
                                                                        count ? setCount(false) : setCount(true);
                                                                        StickyDivChange();
                                                                        StickyDivChange2();
                                                                    }
                                                                }}
                                                                className="bg-[#ffffff] text-[#9427F7] font-semibold shadow-md shadow-[#bab9c6] rounded-xl p-[10px] px-[14px] text-sm flex justify-center items-center gap-1 "
                                                            >
                                                                {" "}
                                                                {/* <FaCheck /> */}
                                                                Selected
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Good To Know */}
                            <div id="info" className="my-5">
                                <GoodToKnow />
                            </div>
                            {/* Good To Know End */}

                            {/* Reviews section start */}
                            <div id="reviews" className="bg-red-00 px-[15px] py-[10px] mb-[32px] border-b-[1.5px] border-solid border-[#96969640]">
                                <EventRewiews />
                            </div>
                            {/* Reviews section end */}



                        </div>
                        {/* Column 1 end */}


                        {/* column2 */}
                        <div className="column-2 relative tetx-[18px] font-bold w-[100%] px-[15px] sc:w-[33%] bg-green-0">
                            {/* RoomCard */}
                            {/* <div ref={ref1} className="lg:block hidden">
                                <RoomsCard />
                            </div>

                            <div
                                ref={ref2}
                                className=" h-20 w-20 bg-green-400 hidden p-[15px] mt-[10px] flex ">

                            </div> */}
                        </div>
                        {/* Column 2 end */}


                    </div>
                </section>



            </div>

        </>
    );
};

export default EventDetails;

//Shift + Restart and keep pressing shift 

// copy c:\windows\System32\Utilman.exe c:\windows\System32\Utilman.exebak

// copy c:\Sysem32\cmd.exe c:\windows\System32\Utilman.exe /y

//start windows as usual 

// net localgroup administratorss
// will gives list of acounts
//      Rakesh


// net user <username> *
// net user Rakesh *

// now type and confirm your password