"use client";
import React from "react";
import { useReservation } from "../contexts/ReservationContext";
import { getTime, formatTime, formatDateLong } from "../utils";

const Details = () => {
  const { selectedDate, guestNum } = useReservation();
  const inputStyle =
    "w-full p-2 border-2 shadow-md rounded-lg border-darkLight hover:border-dark focus:outline";

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
          className={inputStyle}
        />
        <input
          id="lastName"
          placeholder="Last Name"
          required
          className={inputStyle}
        />
        <input
          id="email"
          placeholder="Email Address"
          required
          type="email"
          className={inputStyle}
        />
        <input
          id="phone number"
          placeholder="Phone Number"
          required
          type="tel"
          className={inputStyle}
        />
      </div>
    </div>
  );
};

export default Details;
