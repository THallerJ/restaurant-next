import { artist } from "@/assets";
import Image from "next/image";
import PairWrapper from "../hocs/PairWrapper";
import PairItem from "../hocs/PairItem";

const LiveMusic = () => {
  return (
    <PairWrapper reverse className="pb-12 sm:py-12">
      <PairItem>
        <Image
          src={artist}
          className="rounded-lg shadow-md"
          alt="artist"
          placeholder="blur"
          loading="eager"
        />
      </PairItem>
      <PairItem>
        <p className="heading leading-relaxed sm:text-start">
          We have <br />
          live music <br /> on Fridays <br /> and Saturdays!
        </p>
      </PairItem>
    </PairWrapper>
  );
};

export default LiveMusic;
