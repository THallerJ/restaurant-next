"use client";
import { generateTimes, formatTime } from "@/utils";
import { Time } from "@/assets";
import { InputList, InputLabel } from "@/components";

type YourInformationProps = {
  time: [number, number] | null;
  setTime: React.Dispatch<React.SetStateAction<[number, number] | null>>;
};

const YourInformation = ({ time, setTime }: YourInformationProps) => {
  return (
    <div>
      <h2 className="heading-sm pb-1">Your information</h2>
      <div
        className="flex flex-col gap-4 rounded-lg border-dark/10 shadow-sm
          xs:border-2 xs:p-3"
      >
        <InputList
          id="pickup_time"
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
          <InputLabel
            id="first_name"
            required
            placeholder="First"
            className={inputStyle}
            label="First name"
            autoComplete="given-name"
          />
          <InputLabel
            id="last_name"
            required
            placeholder="Last"
            className={inputStyle}
            label="Last name"
            autoComplete="family-name"
          />
        </InputGroup>
        <InputGroup>
          <InputLabel
            id="email"
            required
            placeholder="email@address.com"
            type="email"
            className={inputStyle}
            label="Email Address"
            autoComplete="email"
          />
          <InputLabel
            id="phone"
            required
            placeholder="(___) ___ ____"
            format="(###) ### ####"
            mask="_"
            patternType="tel"
            className={inputStyle}
            label="Phone number"
            autoComplete="tel-national"
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default YourInformation;

const inputStyle = "input w-full";

const InputGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4 sm:flex-row">{children}</div>
);
