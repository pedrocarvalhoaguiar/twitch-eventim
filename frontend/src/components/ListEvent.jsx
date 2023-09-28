import { getMyEvents, getEvents } from "../api/eventApi";
import { useEffect, useState } from "react";
import EventItem from "./EventItem";

export default function EventList({user}) {

  const [events, setEvents] = useState([]);
  let eventCall = getEvents
  
  if (user){
    eventCall = getMyEvents
  }

  useEffect(() => {
    console.log('effect running')
    eventCall()
      .then((response) => {
        setEvents(response.data?.events);
      })
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {events && events.map((event) => (
        <EventItem event={event} key={event.id}/>
      ))}
    </ul>
  )
}