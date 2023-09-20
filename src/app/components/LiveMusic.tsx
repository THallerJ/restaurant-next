import { artist } from "../../assets";
import Image from "next/image";

const LiveMusic = () => {
  return (
    <section
      id="music"
      className="page-scale flex flex-col-reverse items-center justify-center
        gap-10 pb-12 md:flex-row md:px-12"
    >
      <Image
        src={artist}
        className="pair max-w-xs rounded-lg shadow-md md:max-w-full"
        alt="artist"
      />

      <p
        className="pair heading max-w-xs text-center
          leading-relaxed lg:text-start"
      >
        We have <br />
        live music <br /> on Fridays <br /> and Saturdays!
      </p>
    </section>
  );
};

export default LiveMusic;
