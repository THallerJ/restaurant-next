"use client";
import { useReservationContext } from "../contexts/ReservationContext";
import { getTime, formatTime, formatDateLong } from "@/utils";
import { InputLabel, ListDivider } from "@/components";
import { Time, People } from "@/assets";

const Details = () => {
  const { selectedDate, guestNum } = useReservationContext();

  return (
    <div className="flex h-full w-full flex-col p-4">
      <div
        className="flex w-full flex-col justify-between gap-2 py-4 
          text-xs font-semibold text-dark/75 sm:text-base"
      >
        <div className="flex items-center gap-2">
          <Time className="h-5 w-5" />
          <span>
            {formatTime(...getTime(selectedDate))} -{" "}
            {formatDateLong(selectedDate)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <People className="h-5 w-5" />
          <span>
            Reservation for {guestNum} {guestNum === 1 ? "person" : "people"}
          </span>
        </div>
      </div>
      <ListDivider show={true} />
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
          autoComplete="given-name"
        />
        <InputLabel
          id="lastName"
          placeholder="Last"
          required
          className="input w-full"
          label="Last name"
          autoComplete="family-name"
        />
        <InputLabel
          id="email"
          placeholder="email@address.com"
          required
          type="email"
          className="input w-full"
          label="Email address"
          autoComplete="email"
        />
        <InputLabel
          id="phone number"
          placeholder="(___) ___ ____"
          required
          patternType="tel"
          className="input w-full"
          label="Phone number"
          format="(###) ### ####"
          mask="_"
          autoComplete="tel-national"
        />
      </div>
    </div>
  );
};

export default Details;
