"use client";
import { generateTimes, formatTime } from "@/utils";
import { useState } from "react";
import { Time } from "@/assets";
import { InputLabel } from "@/components";

const YourInformation = () => {
  const [time, setTime] = useState<[number, number] | null>(null);
  const inputStyle = "input w-full";

  type ComponentProps = { children: React.ReactNode };

  const InputGroup = ({ children }: ComponentProps) => (
    <div className="flex flex-col gap-4 sm:flex-row">{children}</div>
  );

  const Thing = ({ children }: ComponentProps) => (
    <div className="flex w-full flex-col-reverse">{children}</div>
  );

  return (
    <div>
      <h2 className="heading-sm pb-1">Your information</h2>
      <div className="flex flex-col gap-4">
        <InputLabel
          text={time !== null ? formatTime(...time) : undefined}
          items={generateTimes(new Date())}
          format={(item) => formatTime(...item)}
          onSelect={(item) => {
            setTime(item);
          }}
          placeholder="Pickup Time"
          className={`${inputStyle} sm:mb-5 sm:w-44`}
          Icon={Time}
          label="Pickup time"
          center
        />
        <InputGroup>
          <Thing>
            <input
              id="first_name"
              required
              placeholder="First"
              className={inputStyle}
            />
            <label
              htmlFor="first_name"
              className=" text-sm font-bold uppercase text-dark/75"
            >
              First name
            </label>
          </Thing>
          <Thing>
            <input
              id="last_name"
              required
              placeholder="Last"
              className={inputStyle}
            />
            <label
              htmlFor="last_name"
              className=" text-sm font-bold uppercase text-dark/75"
            >
              Last name
            </label>
          </Thing>
        </InputGroup>
        <InputGroup>
          <Thing>
            <input
              id="email"
              required
              placeholder="email@address.com"
              type="email"
              className={inputStyle}
            />
            <label
              htmlFor="email"
              className=" text-sm  font-bold uppercase text-dark/75"
            >
              Email address
            </label>
          </Thing>
          <Thing>
            <input
              id="phone"
              required
              placeholder="XXX-XXX-XXXX"
              type="tele"
              className={inputStyle}
            />
            <label
              htmlFor="phone"
              className=" text-sm font-bold uppercase text-dark/75"
            >
              Phone number
            </label>
          </Thing>
        </InputGroup>
      </div>
    </div>
  );
};

export default YourInformation;
