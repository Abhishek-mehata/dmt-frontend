/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { DatePicker, Divider } from "antd";
import { CiStar } from "react-icons/ci";
import dayjs from "dayjs";
import { useAppSelector } from "../../hooks/useTypedSelectors";
import { RootAppState } from "../../redux/store";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Button, PositionViewMap } from "../../components";
import { Modal } from "antd";
import { Checkbox } from "antd";
import api from "../../api";
import { debounce } from "lodash";

const { RangePicker } = DatePicker;

type Category = "place" | "events" | "stays";

interface FilterState {
  property: string;
  type: Category;
  destination: string;
  start_date: string;
  end_date: string;
  min_price: string;
  max_price: string;
  room: string;
}

const filterInitState: FilterState = {
  property: "",
  destination: "",
  type: "place",
  start_date: "",
  end_date: "",
  min_price: "10",
  max_price: "1000",
  room: "",
};

const Searchpage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  const start_date = searchParams.get("start");
  const end_date = searchParams.get("end");
  const type = searchParams.get("type");
  const destination = searchParams.get("destination");
  const { places } = useAppSelector((state: RootAppState) => state.places);
  const { events } = useAppSelector((state: RootAppState) => state.events);
  const [filterState, setFilterState] = useState<FilterState>(filterInitState);
  interface SearchResult {
    latitude?: number;
    longitude?: number;
    cover_image?: { url: string };
    title?: string;
    place_type?: string;
    description?: string;
    street?: string;
    rating?: number;
    price?: number;
    files?: { url: string }[];
    name?: string;
    eventType?: string;
    highlight?: string;
    location?: string;
    OnlineEvent?: { dateRanges?: { latitude?: number; longitude?: number }[] };
  }

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const [openFilter, setOpenFilter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxOptions] = useState([
    "Essentials",
    "Cable",
    "WiFi",
    "Parking",
    "Pool",
    "Gym",
    "TV",
    "Air Conditioning",
    "Heating",
    "Kitchen",
    "Washer",
    "Dryer",
    "Balcony",
    "Elevator",
    "Security",
    "Garden",
    "Fireplace",
    "BBQ",
  ]);

  // Sync state with URL query parameters
  useEffect(() => {
    if (start_date && end_date && type && destination) {
      setFilterState({
        ...filterState,
        start_date,
        end_date,
        type: type as Category,
        destination,
      });
    }},[destination, end_date, start_date, type])
  // }, [start_date, end_date, type, destination]);

  // Debounced API call
  const fetchSearchResults = useMemo(
    () =>
      debounce(async (params: FilterState) => {
        try {
          const apiType = params.type === "stays" ? "place" : params.type;
          const res = await api.get(`/search`, {
            params: {
              type: apiType,
              destination: params.destination,
              startDate: params.start_date,
              endDate: params.end_date,
              ...(params.type === "stays" && { place: params.destination }),
            },
          });
          setSearchResults(res.data);
          console.log("Search response:", res.data);
        } catch (error) {
          console.error("Search failed:", error);
          alert("Failed to fetch search results.");
        }
      }, 500),
    []
  );

  // Trigger API call and update URL on filter change
  useEffect(() => {
    const { start_date, end_date, type, destination } = filterState;
    if (start_date && end_date && type && destination) {
      const queryParams = new URLSearchParams({
        start: start_date,
        end: end_date,
        type,
        destination,
      }).toString();
      navigate(`?${queryParams}`, { replace: true });
      fetchSearchResults(filterState);
    }
  }, [filterState, navigate, fetchSearchResults]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilterState((prev) => ({ ...prev, [key]: value }));
  };

  const isCategoryPlaces = filterState.type === "place" ? true : false;

  const data = useMemo(() => {
    const { destination: userDestination, min_price, max_price } = filterState;

    const lowC = (value: string) => value.toLowerCase();
    const num = (value: string) => Number(value);

    const checkPrice = (price: number): boolean =>
      price >= num(min_price) && price <= num(max_price);

    const items = isCategoryPlaces ? places : events;

    return items.filter((item: any) => {
      const { price }: any = item;

      const destinationMatch = isCategoryPlaces
        ? [item.city, item.country, item.province, item.street]
            .map(lowC)
            .includes(lowC(userDestination))
        : lowC(item.location) === lowC(userDestination);

      const priceMatch = price !== null && checkPrice(num(price));

      return (!userDestination || destinationMatch) && priceMatch;
    });
  }, [filterState, isCategoryPlaces, places, events]);

  const mapData = data.map((item: any) => {
    const {
      latitude,
      longitude,
      OnlineEvent,
      OnsiteEvent,
      images,
      files,
      street,
      location,
    } = item;

    const isPlace = isCategoryPlaces;
    const defaultLat = 27.717245;
    const defaultLng = 85.323959;

    const Lat = isPlace
      ? latitude
      : OnlineEvent?.latitude ?? OnsiteEvent?.latitude ?? defaultLat;
    const Lng = isPlace
      ? longitude
      : OnlineEvent?.longitude ?? OnsiteEvent?.longitude ?? defaultLng;

    return {
      images: isPlace ? images : files,
      location: isPlace ? street : location,
      latitude: Lat,
      longitude: Lng,
    };
  });

  console.log(mapData);

  return (
    <div className={`flex flex-1 flex-col w-full min-h-screen`}>
      <div className="p-4 md:py-6 md:px-8 border-b-2 border-fade-white relative">
        <h2 className="text-2xl font-medium mb-6">
          Results for <span className="font-bold">{filterState.type}</span> {destination}
        </h2>
        {/* Filter Button S */}
        <div className="flex gap-3">
          <div>
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="border rounded-md py-3 px-4 text-white bg-primary flex gap-1 items-center"
            >
              Location<IoMdArrowDropdown />
            </button>
            {/* Places filter dropdown s */}
            {openFilter && (
              <form className="absolute top-[139px] bg-white p-4 border border-primary w-full max-w-[400px] rounded-lg">
                <label className="font-bold">Where are you going?</label>
                <input
                  type="text"
                  placeholder="Enter a Location"
                  value={filterState.destination}
                  onChange={(e) =>
                    handleFilterChange("destination", e.target.value)
                  }
                  className="border border-primary rounded-sm p-3 mt-3"
                />
                <div className="grid grid-cols-3 w-full gap-3 mt-3">
                  <div className="col-span-2">
                    <label className="font-bold">Check In and Checkout</label>
                    <div className="border border-primary p-2">
                      <RangePicker
                        suffixIcon={null}
                        bordered={false}
                        value={
                          !filterState.start_date.length
                            ? null
                            : [
                                dayjs(filterState.start_date, "YYYY-MM-DD"),
                                dayjs(filterState.end_date, "YYYY-MM-DD"),
                              ]
                        }
                        onChange={(_: any, dateStrings: string[]) => {
                          handleFilterChange("start_date", dateStrings[0]);
                          handleFilterChange("end_date", dateStrings[1]);
                        }}
                        className={`w-full border`}
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label className="block font-bold">Guest</label>
                    <input
                      type="number"
                      placeholder="1"
                      className="min-w-[50px] w-full border border-primary p-3 rounded-md"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center w-full justify-center gap-2 p-3 rounded-md bg-primary text-white mt-4"
                  onClick={() => fetchSearchResults(filterState)}
                >
                  <CiSearch />
                  Find a place
                </button>
              </form>
            )}
            {/* Places filter dropdown s */}
          </div>

          <button
            className="border rounded-md py-3 px-4 text-white bg-primary flex gap-1 items-center"
            onClick={() => setIsModalOpen(true)}
          >
            Amenities
          </button>
          {/* Modal Component */}
          <Modal
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={null} // Remove footer buttons (optional)
            centered
            width="100%"
            className="max-w-[700px]"
          >
            <h2 className="text-center text-2xl">Amenities</h2>
            <Divider />
            <div>
              <h2 className="font-bold text-2xl mb-6">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checkboxOptions.map((option, index) => (
                  <Checkbox
                    key={index}
                    onChange={(e) => console.log(option, e.target.checked)}
                    className="text-lg text-gray-700"
                  >
                    {option}
                  </Checkbox>
                ))}
              </div>
            </div>
            <Divider />
            <Button className="block ms-auto" title="submit"></Button>
          </Modal>
        </div>
        {/* Filter Button E */}

        <div className="grid grid-cols-2 gap-4">
          {/* Location Card S */}
          <div>
            {searchResults.length > 0 ? (
              <div className="flex flex-col gap-7 mt-7">
                {searchResults.map((result: any, index: number) => {
                  const imageUrl =
                    filterState.type === "place"
                      ? result.cover_image?.url || "https://via.placeholder.com/400"
                      : result.files?.[0]?.url || "https://via.placeholder.com/400";

                  return (
                    <div key={index} className="rounded-sm w-full max-w-[400px] shadow-lg">
                      <figure className="h-[250px] object-cover overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={result.title || result.name || "Listing"}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <div className="mt-1 p-3">
                        <span className="text-primary font-medium">
                          {filterState.type === "place"
                            ? result.place_type || "Stays"
                            : result.eventType || "Unknown Event Type"}
                        </span>
                        <p className="mt-1 mb-1 font-bold">
                          {result.title || result.name || "Unknown Title"}
                        </p>
                        <p className="text-gray text-sm">
                          {result.description || result.highlight || "No description available."}
                        </p>
                        <p className="text-gray text-sm mt-1">
                          {result.street || result.location || "Unknown Address"}
                        </p>
                        <div className="flex justify-between mt-4">
                          <div className="flex items-center">
                            <CiStar /> {result.rating || 0} (0 reviews)
                          </div>
                          <div>
                            <span className="font-semibold">
                              {result.price
                                ? `NPR ${result.price}`
                                : filterState.type === "events"
                                ? "Free"
                                : "Price not available"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center p-2 rounded-sm bg-[#d1ecf1] mt-5">
                No results available at the moment
              </div>
            )}
          </div>
          {/* Location Card E */}
          {/* Map S */}
          {/* <div className={`w-full md:block`}> */}
            <PositionViewMap
              // position={{
              //   lat: searchResults[0]?.latitude || searchResults[0]?.OnlineEvent?.dateRanges?.[0]?.latitude || 27.717245,
              //   lng: searchResults[0]?.longitude || searchResults[0]?.OnlineEvent?.dateRanges?.[0]?.longitude || 85.323959,
              // }}
              destination={destination || ""}
            />
  {/* <SearchMap
    showContinent={false} // if you want to hide continent buttons
    mapDetails={(data) => {
      console.log("Selected Location:", data);
      
      // Optionally update state here if needed
    }} */}
  {/* /> */}
          {/* </div> */}
          {/* Map E */}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
