import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventshandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventshandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEventsPage;
