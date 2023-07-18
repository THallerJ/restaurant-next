import { open } from "../../../assets";
import OpenDailySpecialDialog from "./components/OpenDailySpecialDialog";
import Image from "next/image";
import { Hours as OpenHours } from "@/components";

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
          className="flex w-full flex-col items-center gap-2 overflow-hidden 
            rounded-2xl border-4 border-dark p-4 text-sm font-bold sm:text-base"
        >
          <OpenHours spacing={3} />
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
