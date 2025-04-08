import React from 'react'
import masterCard from "./images/mastercard.jpg"
import visaImg from "./images/visa.jpg"
type EventDetailsType = {
        cancellationPolicy: string;
        otherInformation:string;
        guestInformation:string;
        hostInformation: string;
        hostSkillLevel: string;
        isDiscountAvailable: boolean;
        discount: number;
        business: string[];
        experiential: string[];
        healthAndWellness: string;
        specialInterest: string;
        isPaid: boolean;
        listingPaidType: string;
        noOfPromotionDays: number;
        language: string;
        location: string;
        // refundable: string;
        platform: string;
    // Add other properties as needed
};

const GoodToKnow: React.FC<{ event: EventDetailsType }> = ({ event }) => {
    
    return (
        // "otherInformation": "Other Information",
        // "guestInformation": "test",
        // "hostInformation": "Host Information",
        // "cancellationPolicy": "Cancellation Policy",
        // "hostSkillLevel": "BEGINNER",
        // "isDiscountAvailable": false,
        // "discount": 0,
        // "business": [
        //     "Seminars / Workshops"
        // ],
        // "experiential": [],
        // "healthAndWellness": "Health and Wellness",
        // "specialInterest": "Special Interest",
        // "isPaid": false,
        // "listingPaidType": "PROMOTED",
        // "noOfPromotionDays": 1,
        <div>
            <h3 className='text-[27.34px] font-medium leading-[41px] text-[#172B4D] tracking-[-1px]'>Good To Know</h3>

            <div className="goodToKnow-content  w-[100%] ">
                {/* row1 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Language</span>
                        <span className='font-[400] text-[18px] w-[50%]'>{event?.language||"English"}</span>
                    </div>
                </div>

                {/* row2 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>cancellation Policy	</span>
                        <span className='font-[400] text-[18px] w-[50%]'>{event.cancellationPolicy}</span>
                    </div>
                </div>

                {/* row3 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Discount</span>
                        <span className='font-[400] text-[18px] w-[50%]'>{event?.isDiscountAvailable==true? "Discount Available": "Not Available"}</span>
                    </div>
                </div>

                {/* row4 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '></span>
                        <span className='font-[400] text-[18px] w-[50%]'>{event?.location||"Kathmandu"}</span>
                    </div>
                </div>

                {/* row5 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Platform Policy	</span>
                        <span className='font-[400] text-[18px] w-[50%]'>{event?.platform||'No Platform policy information'}</span>
                    </div>
                </div>

                {/* row6 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Language</span>
                        <span className='font-[400] text-[18px] w-[50%] '>The hotel accepts the following payment methods:
                            <div className='flex gap-1'>
                                <img src={masterCard} alt="masterCard" />
                                <img src={visaImg} alt="VisaCard" />
                            </div>
                        </span>
                    </div>
                </div>

                {/* row7 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Refundable</span>
                        <span className='font-[400] text-[18px] w-[50%]'>No refundable information available.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoodToKnow