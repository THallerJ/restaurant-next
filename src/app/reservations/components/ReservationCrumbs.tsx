"use client";
import { Breadcrumbs } from "@/components";
import { breadCrumbs } from "@/types";
import DateTime from "./DateTime";
import Details from "./Details";
import { useReservation } from "../contexts/ReservationContext";
import { formatDateLong, formatTime, getTime } from "@/utils";

const ReservationCrumbs = () => {
  const { guestFlag, selectedDate } = useReservation();

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

  const Finished = () => (
    <p className="flex h-full items-center justify-center font-bold">
      {`Your reservation for ${formatTime(
        ...getTime(selectedDate),
      )} on ${formatDateLong(selectedDate)} is booked!`}
    </p>
  );

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
