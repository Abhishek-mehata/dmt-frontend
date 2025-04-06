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
import Person from "../../../../assets/svg/Person.png"
type EventDetailsProps = {
    title: string;
    date: string;
    location: string;
};


const EventDetails: React.FC<EventDetailsProps> = () => {

    const ref1 = useRef<HTMLInputElement>(null)
    const ref2 = useRef<HTMLInputElement>(null)

    // const [price, setPrice] = useState(0)
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
                            <nav className="w-fit  flex items-center justify-between bg-white border-y border-[#c1c7d0] py-[15px] my-0 px-2 ">
                                <ul className="flex gap-[18px]">
                                    <li className=""><a href="#details" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Details</a></li>
                                    <li className=""><a href="#dateandtime" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Available Date & Time</a></li>
                                    <li className=""><a href="#info" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Info</a></li>
                                    <li className=""><a href="#reviews" className="text-[#172b4d] hover:text-[#9c59df] text-[16px] xss:text-[18px] font-medium xss:font-semibold">Reviews</a></li>
                                </ul>
                            </nav>

                            {/* Profile start */}
                            <div className="profile mt-[10px]">
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
                            <div ref={ref1} className="lg:block hidden">
                                <RoomsCard />
                            </div>

                            {/* Div for bookings when reserve button is clicked*/}
                            <div
                                ref={ref2}
                                className=" hidden  ">
                                <div className="relative p-[15px] mt-[10px] flex flex-col items- bg-clip-border border border-solid border-[#00000020]">
                                    {/* Event Pricing Banner */}
                                    <div className="booking-banner rounded-[3px]">
                                        <div className=" px-[15px]">
                                            <span className="text-[22px] leading-[32px] font-medium">NPR 3,500</span>
                                            <span className="font-semibold leading-[24px]">/per person</span>
                                        </div>
                                    </div>

                                    {/* Event Booking Form */}
                                    <div className="booking-form w-[100%] h-[5rem] p-4 mx-[5px] border-[1.5px] border-[#9c59df] rounded-bl-[7px] rounded-br-[7px] bg-[#fff] text-[#8b9199]">
                                        <img src={Person} alt="" />
                                        {/* <select name="" id=""></select> */}
                                    </div>

                                    {/* Booking Details */}
                                    <div className="w-[100%] border-b-[1px] border-[#96969640] p-[15px] ">
                                        {/* detail-1 (date,time ...) */}
                                        <div className="border-b border-[#96969640] p-[15px]">
                                            <div className="rows flex flex-wrap ">
                                                <div className="pt1 w-2/3">
                                                    <p className="text-[12px] font-light leading-[12px] underline text-[#172B4D]">Thu, 20th Feb 2025</p>
                                                    <ul className="list-disc pl-6 mt-[5px]">
                                                        <li className="text-[12px] font-[300] leading-[12px] text-[#8B9199]">Start Time: 08:20AM</li>
                                                        <li className="text-[12px] font-[300] leading-[12px] text-[#8B9199]">Language: HIndi</li>
                                                    </ul>
                                                </div>

                                                <div className="pt2 w-1/3 pr-0">
                                                    <p className=" text-[12px] font-light leading-[12px] text-right text-[#172B4D]">NPR 3500.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Booking Details End */}

                                    {/* Total */}
                                    <div className="total py-4 px-2">
                                        <div className="row flex flex-wrap">
                                            <div className="pt1 w-[58%]">
                                                <h5 className="text-[17.5px] font-medium leding-[27px] text-[#172B4D] mb-[5px] ">Total</h5>
                                                <p className="text-[14px] leading-[21px] font-[400] text-[#434859]">
                                                    Total incudes fees, not tax.
                                                </p>
                                            </div>

                                            <div className="pt2 relative w-[42%] pr-[15px] pl-[15px]">
                                                <h5 className="text-[17.5px] font-medium leading-[26.25px] text-[#172B4D] text-right">NPR 3500</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Total Ends */}

                                    {/* request to book */}
                                    <div className="request-to-book py-5">
                                        <button type="submit" className="w-[100%] opacity-[.61] bg-[#9c59df] cursor-pointer select-none font-bold text-[14px] text-[#fff] py-[1rem] px-[3rem] mt-[1rem]">Request to Book</button>
                                        <p className="text-[14px] leading-[21px] font-[400] mt-[1rem]">Free cancellation until February  <span className="text-[#9C59DFC4]">20, 2024</span></p>
                                    </div>
                                    {/* request to book ends */}

                                    {/* Contact Host */}
                                    <div className="text-center p-7 border-t border-b border-[#96969640]">
                                        <a className="text-[14px] font-normal leading-[21px] text-[#9C59DFC4]" href="#">Contact Host</a>
                                    </div>
                                </div>
                            </div>

                            {/* Div for bookings end*/}
                        </div>
                        {/* Column 2 end */}


                    </div>
                </section>



            </div>

        </>
    );
};

export default EventDetails;


// I have done changes to create card in
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