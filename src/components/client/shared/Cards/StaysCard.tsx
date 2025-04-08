import { useRef } from "react";
import stayscardImage from "./stays-card-image.jpg"
import "./index.css"
const stays = [
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
  {
    title: "Test",
    subtitle: "Stays in बिराटनगर, Nepal",
    rating: 9.6,
    reviews: 160,
    image: stayscardImage,
  },
];

export default function App() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    const scrollAmount = current.offsetWidth;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full h-auto px-6 py-10  " >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Left Label */}
        <div className="md:w-1/4 flex justify-center items-center">
          <h2 className="text-2xl font-bold text-center align-middle md:mt-[250px]">
            <span className="bg-none text-center px-2 py-1 inline-block">
              Promoted By<br />DMT.
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative md:w-3/4">
          {/* <div className="flex items-center justify-around mb-4">
            <button
              onClick={() => scroll("left")}
              className="bg-transparent bg-[#9c59df] rounded-full opacity-70  hover:bg-gray-400  text-white text-[30px] font-extrabold py-1 px-3  cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-transparent bg-[#9c59df] rounded-full opacity-70  hover:bg-gray-400  text-white text-[30px] font-extrabold py-1 px-3  cursor-pointer"
            >
              →
            </button>
          </div> */}

          <a href="http://localhost:5173/stays/3">

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              {stays.map((stay, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 h-[500px] w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer"
                >
                  <img
                    src={stay.image}
                    alt={stay.title}
                    className="rounded-t-xl w-full h-[80%] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-purple-700">
                      {stay.title}
                    </h3>
                    <p className="text-sm text-gray-600">{stay.subtitle}</p>
                    <p className="text-sm text-gray-800 mt-1">
                      <span className="text-purple-700 font-semibold">
                        ★ {stay.rating}
                      </span>{" "}
                      ({stay.reviews})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </a>

          <div className="flex mt-8 items-center justify-end gap-10 mb-4 px-36">
            <button
              onClick={() => scroll("left")}
              className="bg-transparent bg-[#9c59df] rounded-full opacity-70  hover:bg-gray-400  text-white text-[30px] font-extrabold py-1 px-3  cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-transparent bg-[#9c59df] rounded-full opacity-70  hover:bg-gray-400  text-white text-[30px] font-extrabold py-1 px-3  cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
