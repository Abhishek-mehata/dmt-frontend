import React from 'react'

import locationImg from "../../../../assets/svg/marker.svg"
import shareIcon from "../../../../assets/svg/share-icon.svg"
import downArrow from "../../../../assets/svg/arrow_down_2.svg"

interface EventDetails {
    eventType: string;
    location?: string;
}

interface TypeAndLocationProps {
    event: {
        location: string;
        eventType: string;
        event: EventDetails;
    };
}

const TypeAndLocation: React.FC<TypeAndLocationProps> = ({ event }) => {
    console.log(event, 'event');
    return (
        <>
            <div>
                {/* Event Type Here */}
                <h2 className="text-[28px] text-center xs:text-left font-medium text-[#172b4d]">{event?.eventType === "ONLINE" ? 'Online Event' : 'Onsite Event'} </h2>
                {/* Event Location Here*/}
                <div className="flex">
                    <img className="w-20px mr-[5px]" src={locationImg} alt="" />
                    <span className="font-medium text-[#8b9199] text-[17px]">{event?.location || "Kathmandu 44600, Nepal"}</span>
                </div>
            </div>

            <button className="flex items-center mt-2 xs:mt-0 cursor-pointer select-none w-[100px] justify-center h-[40px] text-[#8b9199] border-[1.8px] border-[#9c59df] rounded-full gap-1 p-[15px] text-[14px] font-medium hover:bg-[#9c59df] hover:text-white ">
                <img src={shareIcon} alt="" />
                Share
                <img src={downArrow} alt="" />
            </button>
        </>
    );
};

export default TypeAndLocation