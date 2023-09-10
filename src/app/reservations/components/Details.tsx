"use client";
import React from "react";
import { useReservation } from "../contexts/ReservationContext";
import { getTime, formatTime, formatDateLong } from "../utils";

const Details = () => {
  const { selectedDate, guestNum } = useReservation();

  return (
    <div className="flex h-full w-full flex-col p-4">
      <div className="flex flex-col text-xs font-semibold text-dark sm:text-base">
        <span>{`${formatDateLong(selectedDate)} - 
          ${formatTime(...getTime(selectedDate))}`}</span>
        <span>{`${guestNum} people`}</span>
      </div>
      <div className="flex w-full flex-col items-center space-y-4">
        <input
          id="date"
          name="date"
          type="hidden"
          value={Math.floor(selectedDate.getTime() / 1000)}
        />
        <input id="guestNum" name="guestNum" type="hidden" value={guestNum} />
        <input
          id="firstName"
          placeholder="First Name"
          required
          className="input w-full"
        />
        <input
          id="lastName"
          placeholder="Last Name"
          required
          className="input w-full"
        />
        <input
          id="email"
          placeholder="Email Address"
          required
          type="email"
          className="input w-full"
        />
        <input
          id="phone number"
          placeholder="Phone Number"
          required
          type="tel"
          className="input w-full"
        />
      </div>
    </div>
  );
};

export default Details;
