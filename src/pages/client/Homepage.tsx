import {
  Activities,
  ClientContainer,
  Download,
  EventCard,
  Hero,
  PlaceCard,
  Section,
} from "../../components";
import { useAppSelector } from "../../hooks/useTypedSelectors";
import { RootAppState } from "../../redux/store";
import EventsCard from "./cards/EventCard";
import TopDestinationsCard from "./cards/TopDestinationsCard";

const Homepage = () => {
  const { places } = useAppSelector((state: RootAppState) => state.places);
  const { events } = useAppSelector((state: RootAppState) => state.events);

  return (
    <>
      <Hero />
      <Activities data={places} />
      <Section>
        <ClientContainer>
          {/* <h2
            className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
          >
            Featuredssd
          </h2> */}

          {/* Div for top desitnations to explore */}
          <div>
            <h2 className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}>Top Destination to Explore</h2>

            <div className="cards-wrappper w-[100%] flex flex-wrap gap-3 items-center justify-center py-[15px] px-[10px]">
              <TopDestinationsCard />
              <TopDestinationsCard />
              <TopDestinationsCard />
              <TopDestinationsCard />
              <TopDestinationsCard />
              <TopDestinationsCard />
            </div>
          </div>

          {/* Popular Events Card Start */}
          <div>
            <h2
              className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
            >
              Popular Events
            </h2>

            <div className="cards w-[100%] flex flex-wrap gap-3 items-center justify-center py-[15px] px-[10px]">
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              {/* <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard /> */}
            </div>

          </div>

          <div
            className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10`}
          >
            {places.map((item, i) => (
              <PlaceCard data={item} key={i} />
            ))}
          </div>
        </ClientContainer>
      </Section>
      <Download />
      <Section>
        <ClientContainer>
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
        </ClientContainer>
      </Section>
    </>
  );
};

export default Homepage;
