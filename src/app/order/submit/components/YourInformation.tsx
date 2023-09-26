"use client";
import { InputList } from "@/components";
import { generateTimes, formatTime } from "@/utils";
import { useState } from "react";
import { Time } from "@/assets";

const YourInformation = () => {
  const [time, setTime] = useState<[number, number] | null>(null);

  const inputGroup = "flex flex-col gap-4 sm:flex-row";
  const inputStyle = "input w-full";

  return (
    <div>
      <h2 className="heading-sm pb-1">Your information</h2>
      <div className="flex flex-col gap-4">
        <InputList
          text={time !== null ? formatTime(...time) : undefined}
          items={generateTimes(new Date())}
          format={(item) => formatTime(...item)}
          onSelect={(item) => {
            setTime(item);
          }}
          placeholder="Pickup Time"
          className={`${inputStyle} sm:mb-5 sm:w-44`}
          Icon={Time}
          center
        />
        <div className={inputGroup}>
          <input required placeholder="First Name" className={inputStyle} />
          <input required placeholder="Last Name" className={inputStyle} />
        </div>
        <div className={inputGroup}>
          <input
            required
            placeholder="Email Address"
            type="email"
            className={inputStyle}
          />
          <input
            required
            placeholder="Phone Number"
            type="tele"
            className={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default YourInformation;
