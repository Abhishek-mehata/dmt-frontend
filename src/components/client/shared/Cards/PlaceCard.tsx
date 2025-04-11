// import { NavLink } from "react-router-dom";
// import { Svg } from "../../../../assets";
// import { FC } from "react";
// import { Place } from "../../../../types/places";
// import { ImageAPI } from "../../../../api";

// const PlaceCard: FC<{ data: Place }> = ({ data }) => {
//   const {
//     id,
//     title,
//     subtitle,
//     rating,
//     cover_image: { file_key },
//   } = data;

//   return (
//     <NavLink
//       to={`/places/details/${id}`}
//       className={`w-full bg-white shadow-lg rounded-lg overflow-hidden smooth hover:scale-105`}
//     >
//       <img
//         src={`${ImageAPI}/${file_key}`}
//         alt=""
//         className={` max-h-[200px] w-full object-cover`}
//       />
//       <div className={`flex flex-col gap-1 pt-6 p-4`}>
//         <h2 className={`text-primary text-xl font-semibold`}>{subtitle}</h2>
//         <span className={`text-black text-lg`}>{title}</span>
//         <div className={`flex justify-between mt-2.5 w-full`}>
//           <div className={`flex items-center`}>
//             <img src={Svg.star} alt="star icon" />
//             <p className={`mx-2 text-sm font-medium text-dark-gray`}>
//               {rating || 1}
//             </p>
//             <span className={`bg-gray-500 text-dark-gray`}>{`(201)`}</span>
//           </div>
//           {/* <span className={`text-center text-dark-blue text-lg font-medium`}>
//             {`$${price}`}
//             <span className={`text-base`}>{`/night`}</span>
//           </span> */}
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default PlaceCard;
import { NavLink } from "react-router-dom";
import { Svg } from "../../../../assets";
import { FC } from "react";
import { Place } from "../../../../types/places";
import { ImageAPI } from "../../../../api";

const PlaceCard: FC<{ data: Place }> = ({ data }) => {
  const {
    id,
    title,
    subtitle,
    rating,
    cover_image,
  } = data;

  const imageUrl = cover_image?.url || `${ImageAPI}/${cover_image?.file_key}` || "/fallback-image.jpg";

  return (
    <NavLink
      to={`/stays/${id}`}
      className="w-full bg-white shadow-lg rounded-lg overflow-hidden smooth hover:scale-105"
    >
      <img
        src={imageUrl}
        alt={cover_image?.original_name || "Place cover image"}
        className="h-[150px] max-h-[200px] w-full object-cover"
      />
      <div className="flex flex-col gap-1 h-[180px] max-h-[200px] pt-6 p-4">
        <span 
        // className="text-black text-lg"
        className="truncate text-[20px] text-primary font-semibold"
        >Title{title}</span>
        <h2 
        // className="text-primary text-xl font-semibold"
        className="mb-0 text-[17px] text-[#8b9199] break-words leading-6 font-[500] overflow-hidden custom-clamp"
        >{subtitle}</h2>

        <div className="flex justify-between items-center mt-2.5 w-full">
          <div className="flex items-center">
            <img src={Svg.star} alt="star icon" />
            <p className="mx-2 text-sm font-medium text-dark-gray">
              {rating || 1}
            </p>
            <span className="bg-gray-500 text-dark-gray">{`(201)`}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default PlaceCard;
