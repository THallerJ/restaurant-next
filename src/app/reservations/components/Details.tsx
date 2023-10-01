"use client";
import React from "react";
import { useReservation } from "../contexts/ReservationContext";
import { getTime, formatTime, formatDateLong } from "@/utils";
import { InputLabel } from "@/components";

const Details = () => {
  const { selectedDate, guestNum } = useReservation();

  return (
    <div className="flex h-full w-full flex-col p-4">
      <div className="flex flex-col text-xs font-semibold text-dark sm:text-base">
        <span>{`${formatDateLong(selectedDate)} - 
          ${formatTime(...getTime(selectedDate))}`}</span>
        <span>{`${guestNum} people`}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-2 pt-4">
        <input
          id="date"
          name="date"
          type="hidden"
          value={Math.floor(selectedDate.getTime() / 1000)}
        />
        <input id="guestNum" name="guestNum" type="hidden" value={guestNum} />
        <InputLabel
          id="firstName"
          placeholder="First"
          required
          className="input w-full"
          label="First name"
        />
        <InputLabel
          id="lastName"
          placeholder="Last"
          required
          className="input w-full"
          label="Last name"
        />
        <InputLabel
          id="email"
          placeholder="email@address.com"
          required
          type="email"
          className="input w-full"
          label="Email address"
        />
        <InputLabel
          id="phone number"
          placeholder="(___) ___ ____"
          required
          type="tel"
          className="input w-full"
          label="Phone number"
          format="(###) ### ####"
          mask="_"
        />
      </div>
    </div>
  );
};

export default Details;
