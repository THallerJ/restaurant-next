"use client";
import { Breadcrumbs, Directions } from "@/components";
import { breadCrumbs } from "@/types";
import DateTime from "./DateTime";
import Details from "./Details";
import { useReservationContext } from "../contexts/ReservationContext";
import { formatDateLong, formatTime, getTime } from "@/utils";

const ReservationCrumbs = () => {
  const { guestFlag } = useReservationContext();

  const crumbs: breadCrumbs[] = [
    {
      title: "1. Pick date & time",
      content: <DateTime />,
    },
    {
      title: "2. Give details",
      content: <Details />,
    },
  ];

  return (
    <Breadcrumbs
      title="Make a reservation"
      finished={<Finished />}
      crumbs={crumbs}
      block={!guestFlag}
      blockMessage="Please select the number of guests"
    />
  );
};

export default ReservationCrumbs;

const Finished = () => {
  const { selectedDate } = useReservationContext();

  return (
    <div className="flex h-full items-center justify-center">
      <p className="rounded-lg bg-white p-4 shadow-md">
        Your reservation for {formatTime(...getTime(selectedDate))} on{" "}
        {formatDateLong(selectedDate)} is booked! Click{" "}
        <Directions>here</Directions> for directions to the restaurant!
      </p>
    </div>
  );
};
