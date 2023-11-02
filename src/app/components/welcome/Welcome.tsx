import ScrollButton from "./components/ScrollButton";
import BackgroundImage from "./components/BackgroundImage";

const Welcome = () => {
  return (
    <section id="welcome" className="relative h-screen w-full overflow-hidden">
      <BackgroundImage />
      <div
        className="page-scale absolute inset-x-0 top-0 z-10 m-auto flex h-full
          flex-col items-center justify-center gap-6 p-4 text-center text-fourth 
          md:gap-1 lg:gap-8"
      >
        <h2
          className="w-full font-bebas text-[4rem] uppercase
           leading-[4rem] sm:leading-[5rem] md:text-[4.0rem]"
        >
          Welcome <br className="xl:hidden" />
          to <br className="xl:hidden" />
          Restaurant!
        </h2>
        <p className="md:mb-8 lg:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          cursus sit amet dictum sit amet justo donec enim.
        </p>
        <ScrollButton />
      </div>
    </section>
  );
};

export default Welcome;
