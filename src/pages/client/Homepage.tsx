
import {
  // Activities,
  ClientContainer,
  Download,
  EventCard,
  Hero,
  PlaceCard,
  Section,
} from "../../components";
import { useAppSelector ,useAppDispatch } from "../../hooks/useTypedSelectors";
import { RootAppState } from "../../redux/store";
// import EventsCard from "./cards/EventCard";
import TopDestinationsCard from "./cards/TopDestinationsCard";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import Filter from "../../components/client/specific/Filter";
import i1 from "../../assets/images/starting_city_1.jpg";
import i2 from "../../assets/images/starting_city_2.jpg";
import i3 from "../../assets/images/starting_city_3.jpg";
import i4 from "../../assets/images/starting_city_4.jpg";
import i5 from "../../assets/images/starting_city_5.jpg";
import i6 from "../../assets/images/starting_city_6.jpg";
import { getUpcomingEvents } from "../../redux/actions/events";
import { getLatestPlaces } from "../../redux/actions/places";
import { Link } from "react-router-dom";
import StaysCard from "./cards/StaysCard";
// import { Link } from "lucide-react";
// http://localhost:8000/v1/explore/boosted,
// http://localhost:8000/v1/explore/latestplaces,
// http://localhost:8000/v1/explore/eventsupcoming
const Homepage = () => {
  // const { places } = useAppSelector((state: RootAppState) => state.places);
  // const { events } = useAppSelector((state: RootAppState) => state.events);
  const dispatch = useAppDispatch();
  const { latestPlaces, loadingLatestPlaces } = useAppSelector((state) => state.places);
  const { upcomingEvents, loadingUpcomingEvents } = useAppSelector(
    (state: RootAppState) => state.events
  );
useEffect(() => {
  dispatch(getUpcomingEvents());
  dispatch(getLatestPlaces());

}, [dispatch]);

  console.log(upcomingEvents,loadingUpcomingEvents,'eeeeeeee')
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <Activities data={places} /> */}
      <Section className="mt-16" >
        <ClientContainer>
          {/* <h2
            className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
          >
            Featuredssd
          </h2> */}

          {/* Div to display Promoted by dmt section */}
          <div>
            {/* <div className="part1 px-[15px]"><span className="text-[44px] font-bold leading-[60px] text-left"> Promoted by DMT.</span></div>
            <div className="part2"></div> */}
            <StaysCard />
          </div>

          {/* Div for top desitnations to explore */}
          <div className="my-8">
            <h2 className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}>Top Destination to Explore</h2>

            <div className="cards-wrappper w-[100%] flex flex-wrap gap-3 items-center justify-center py-[15px] px-[10px]">
              {/* <Filter />
              <a href="components/client/specific/Filter">
                <TopDestinationsCard />
              </a> */}
              <Link to={`/search?destination=${"NEWYORK".toLowerCase()}`}>
              <TopDestinationsCard src={i1} cityName={"NEW YORK"} />
              </Link>
              <Link to={`/search?destination=${"SYDNEY".toLowerCase()}`}>

              <TopDestinationsCard src={i2} cityName={"SYDNEY"} />
              </Link>
              <Link to={`/search?destination=${"PARIS".toLowerCase()}`}>
              <TopDestinationsCard src={i3} cityName={"PARIS"} />
              </Link>
              <Link to={`/search?destination=${"BARCELONA".toLowerCase()}`}>
              <TopDestinationsCard src={i4} cityName={"BARCELONA"} />
              </Link>
              <Link to={`/search?destination=${"BERLIN".toLowerCase()}`}>
              <TopDestinationsCard src={i5} cityName={"BERLIN"} />
              </Link>
              <Link to={`/search?destination=${"BUDAPEST".toLowerCase()}`}>
              <TopDestinationsCard src={i6} cityName={"BUDAPEST"} />
              </Link>

            </div>
          </div>

          {/* Popular Events Card Start */}
          {/* <div className="mt-8">
            <h2
              className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
            >
              Popular Events
            </h2>

            <div className="cards w-[100%] flex flex-wrap gap-3 items-center justify-center py-[15px] px-[10px]">
            
              <EventsCard />
           
            </div>

          </div> */}
          <div className="mt-10">
          <h2 className="text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight mb-8">
          Popular Events
  </h2>

  {loadingUpcomingEvents ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : upcomingEvents.length === 0 ? (
    <p className="text-center text-gray-500">No events found.</p>
  ) : (
    <div className="grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {upcomingEvents.map((event) => (
        // <Link to={`/events/${event.id}`} key={event.id}>
        <EventCard key={event.id} data={event} />
        // </Link>
      ))}
    </div>
  )}
</div>

          {/* <div
            className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10`}
          >
              <h2
              className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
            >
              Popular Places
            </h2>
            {places.map((item, i) => (
              <PlaceCard data={item} key={i} />
            ))}
          </div> */}
             {/* <div
            className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10`}
          >
              <h2
              className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
            >
              Popular Places
            </h2>
              <PlaceCard  />
          </div> */}
           <div className="mt-10">
      {/* Heading */}
      <h2 className="text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight mb-8">
        Popular Places
      </h2>

      {/* Loading state */}
      {loadingLatestPlaces ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : latestPlaces.length === 0 ? (
        <p className="text-center text-gray-500">No places found.</p>
      ) : (
        <div className="grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
       {latestPlaces.map((place) => (
  <PlaceCard key={place.id} data={place} />
))}
        </div>
      )}
    </div>
        </ClientContainer>
      </Section>
      <Download />
      <Section>
        {/* <ClientContainer>
          <h2
            className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
          >
            Upcoming Events
          </h2>
          <div
            className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10`}
          >
            {events.map((item, i) => (
              <EventCard data={item} key={i} />
            ))}
          </div>
        </ClientContainer> */}
        <Section>
  <ClientContainer>
    <h2 className="text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight">
      Upcoming Events
    </h2>

    {/* {loadingUpcomingEvents ? (
      <p className="text-center text-gray-500 mt-6">Loading upcoming events...</p>
    ) : upcomingEvents?.length === 0 ? (
      <p className="text-center text-gray-500 mt-6">No upcoming events at the moment.</p>
    ) : (
      <div className="grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {upcomingEvents.map((item, i) => (
          <EventCard data={item} key={i} />
        ))}
      </div>
    )} */}
    {loadingUpcomingEvents ? (
  <p className="text-center text-gray-500 mt-6">Loading upcoming events...</p>
) : !Array.isArray(upcomingEvents) || upcomingEvents.length === 0 ? (
  <p className="text-center text-gray-500 mt-6">No upcoming events at the moment.</p>
) : (
  <div className="grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10">
    {upcomingEvents.map((item, i) => (
      <EventCard data={item} key={i} />
    ))}
  </div>
)}

  </ClientContainer>
</Section>

      </Section>
    </div>
  );
};

export default Homepage;
