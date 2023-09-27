"use client";
import { InputList } from "@/components";
import { generateTimes, formatTime } from "@/utils";
import { useState } from "react";
import { Time } from "@/assets";

const YourInformation = () => {
  const [time, setTime] = useState<[number, number] | null>(null);
  const inputStyle = "input w-full";

  type ComponentProps = { children: React.ReactNode };

  const InputGroup = ({ children }: ComponentProps) => (
    <div className="flex flex-col gap-4 sm:flex-row">{children}</div>
  );

  const InputLabel = ({ children }: ComponentProps) => (
    <div className="flex w-full flex-col-reverse">{children}</div>
  );

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
        <InputGroup>
          <InputLabel>
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
          </InputLabel>
          <InputLabel>
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
          </InputLabel>
        </InputGroup>
        <InputGroup>
          <InputLabel>
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
          </InputLabel>
          <InputLabel>
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
          </InputLabel>
        </InputGroup>
      </div>
    </div>
  );
};

export default YourInformation;
