import React from 'react'
import masterCard from "./images/mastercard.jpg"
import visaImg from "./images/visa.jpg"
const GoodToKnow = () => {
    return (
        <div>
            <h3 className='text-[27.34px] font-medium leading-[41px] text-[#172B4D] tracking-[-1px]'>Good To Know</h3>

            <div className="goodToKnow-content  w-[100%] ">
                {/* row1 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Language</span>
                        <span className='font-[400] text-[18px] w-[50%]'>Hindi</span>
                    </div>
                </div>

                {/* row2 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Host Skill Level	</span>
                        <span className='font-[400] text-[18px] w-[50%]'>Expert</span>
                    </div>
                </div>

                {/* row3 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>What's included</span>
                        <span className='font-[400] text-[18px] w-[50%]'>Childern are welcome at this hotel.</span>
                    </div>
                </div>

                {/* row4 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Full Location	</span>
                        <span className='font-[400] text-[18px] w-[50%]'>Kathmandu</span>
                    </div>
                </div>

                {/* row5 */}
                <div className='border-t-[1.5px] border-[#dee2e6]'>
                    <div className='flex justify-start p-[10px]'>
                        <span className='font-[400] text-[18px] w-[50%] '>Platform Policy	</span>
                        <span className='font-[400] text-[18px] w-[50%]'>No Platform policy information</span>
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