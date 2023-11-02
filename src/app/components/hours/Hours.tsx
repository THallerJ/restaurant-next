import { open } from "../../../assets";
import OpenDailySpecialDialog from "./components/OpenDailySpecialDialog";
import Image from "next/image";
import { Hours as OpenHours } from "@/components";

const Hours = () => {
  return (
    <section
      id="hours"
      className="page-scale flex flex-col items-center justify-center gap-10
        py-12 md:flex-row md:pb-24"
    >
      <div className="pair flex flex-col items-center">
        <span className="heading">Hours</span>
        <div
          className="bordered flex w-full flex-col items-center 
            gap-2 overflow-hidden p-4 font-bold sm:text-base"
        >
          <OpenHours spacing={3} />
        </div>
        <OpenDailySpecialDialog />
      </div>
      <Image
        src={open}
        className="pair max-w-full self-center rounded-lg shadow-md lg:self-start"
        alt="open"
        placeholder="blur"
      />
    </section>
  );
};
export default Hours;
