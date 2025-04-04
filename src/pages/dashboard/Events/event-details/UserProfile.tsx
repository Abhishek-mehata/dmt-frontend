import React from 'react'

// images for user-profile
import userP1 from "./images/user-profile/u1.jpg"

const UserProfile = () => {
    return (
        <>

            <div className="flex items-center">
                <div className="user-image relative">
                    <img className="w-[50px] h-[50px] object-cover rounded-full align-middle" src={userP1} alt="" />
                    {/* Status Indicator */}
                    <span className="status-indicator w-[15px] h-[15px] bg-green-500 absolute  bottom-0 right-0 rounded-full border-[2px] border-solid border-[#fff]"></span>
                </div>
                <p className="ml-3">Lover Roy</p>
            </div>
        </>
    )
}

export default UserProfile