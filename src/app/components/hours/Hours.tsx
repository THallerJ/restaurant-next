import { open } from "../../../assets";
import { hours } from "../../../constants";
import OpenDailySpecialDialog from "./components/OpenDailySpecialDialog";
import Image from "next/image";

const Hours = () => {
  return (
    <section
      id="hours"
      className="flex flex-col items-center justify-center 
        gap-10 py-12 md:flex-row md:px-12"
    >
      <div className="pair flex flex-col items-center">
        <span className="heading">Hours</span>
        <ul
          className="flex w-full flex-col gap-2 rounded-2xl border-2 
          border-dark p-4 sm:items-center md:items-start"
        >
          {hours.map((item) => (
            <li
              key={item}
              className="mb-1 text-start text-xs font-bold text-dark sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
        <OpenDailySpecialDialog />
      </div>
      <Image
        src={open}
        className="pair max-w-[20rem] self-center rounded-2xl shadow-md lg:self-start"
        alt="open"
      />
    </section>
  );
};
export default Hours;
