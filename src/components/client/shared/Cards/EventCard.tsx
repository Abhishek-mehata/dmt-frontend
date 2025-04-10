/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { EventModel } from "../../../../types/event";
// import { ImageAPI } from "../../../../api";

const EventCard: FC<{ data: EventModel }> = ({ data }) => {
  const { id, name, location, eventType, price, category, language, files } =
    data as any;
   console.log(data,'data')
  return (
    <NavLink
      to={`/events/${id}`}
      className={`w-[270px] bg-white shadow-lg rounded-lg overflow-hidden smooth hover:scale-105`}
    >
      {/* <img
        src={`${ImageAPI}/${files[0].file_key}`}
        alt=""
        className={` max-h-[200px] w-full object-cover`}
      /> */}
   {files?.length > 0 ? (
  <img
    src={files[0]?.url}
    alt={files[0]?.original_name || "Event Image"}
    className="max-h-[200px] w-full object-cover"
  />
) : (
  <div className="h-[200px] w-full bg-gray-200 flex items-center justify-center">
    <span className="text-gray-500">No Image Available</span>
  </div>
)}
      <div className={`flex flex-col gap-2 pt-6 p-4`}>
        <div className={`flex items-center justify-between`}>
          <h2
          //  className={`text-black text-lg capitalize`}
           className={`truncate text-[17px] text-[#172b4d] font-semibold`}
          >{name}</h2>
          <span
            // className={`text-white text-xs font-semibold capitalize py-2 px-3 rounded bg-primary w-fit`}
            className={`text-[#9c59df] text-[16px] font-semibold mt-[3px]`}
          >
            {eventType}
          </span>
        </div>
        <span 
        // className={`text-dark-gray mt-2 text-md h-10`}
        className={`mb-0 text-[16px] text-[#8b9199] break-words leading-6 font-normal overflow-hidden custom-clamp`}
        >{location}</span>

        <div className={`flex justify-start gap-4 items-center mt-2.5 w-full`}>
          <p className={`text-sm font-medium text-dark-gray`}>
            {`Category: ${category}`}
            {/* {`Category(${category})`} */}
          </p>
          <span 
          // className={`text-center text-dark-blue text-lg font-medium`}
          className={`truncate text-[17px] text-[#172b4d] font-semibold`}
          >
            {`$${price}`}
          </span>
        </div>

        <div className={` w-full flex items-center justify-between`}>
          <p
            className={`text-ellipsis text-[13px] font-medium text-dark-gray capitalize`}
          >{`Language: ${language}`}</p>
          <span className={`text-ellipsis text-dark-blue text-[16px] font-semibold`}>
            {`$${price}`}
            <span className={`text-[12px]`}>{`/night`}</span>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default EventCard;
