"use client";
import { Breadcrumbs } from "@/components";
import { breadCrumbs } from "@/types";
import DateTime from "./DateTime";
import Details from "./Details";
import { useReservation } from "../contexts/ReservationContext";
import { formatDateLong, formatTime, getTime } from "@/utils";

const ReservationCrumbs = () => {
  const { guestFlag } = useReservation();

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
      submitText="book reservation"
    />
  );
};

export default ReservationCrumbs;

const Finished = () => {
  const { selectedDate } = useReservation();

  return (
    <div className="flex h-full items-center justify-center">
      <p className="rounded-lg bg-white p-4 shadow-md">
        Your reservation for {formatTime(...getTime(selectedDate))} on{" "}
        {formatDateLong(selectedDate)} is booked! Click{" "}
        <a
          className="text-third hover:underline"
          href="http://maps.google.com/?q=1600 Pennsylvania Avenue NW, Washington, DC 20500"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </a>{" "}
        for directions to the restaurant!
      </p>
    </div>
  );
};
