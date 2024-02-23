import { open } from "@/assets";
import OpenDailySpecialDialog from "./components/OpenDailySpecialDialog";
import Image from "next/image";
import { Hours as OpenHours } from "@/components";
import PairWrapper from "../../hocs/PairWrapper";
import PairItem from "../../hocs/PairItem";

const Hours = () => {
  return (
    <PairWrapper className="py-12" sectionId="hours">
      <PairItem>
        <span className="heading">Hours</span>
        <div
          className="bordered flex w-full flex-col items-center 
            gap-2 overflow-hidden p-4 font-bold sm:text-base"
        >
          <OpenHours spacing={3} />
        </div>
        <OpenDailySpecialDialog />
      </PairItem>
      <PairItem>
        <Image
          src={open}
          className="w-full rounded-lg shadow-md sm:w-11/12 xxl:w-full"
          alt="open"
          placeholder="blur"
          loading="eager"
        />
      </PairItem>
    </PairWrapper>
  );
};
export default Hours;
