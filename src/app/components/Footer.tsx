import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Hours, Directions, PhoneNumber } from "@/components";

const Footer = () => {
  return (
    <div
      className="flex w-full flex-col gap-12 bg-dark pb-4 
        pt-14 font-medium text-white lg:px-40"
    >
      <FindContact className="lg:hidden" />
      <div className="flex w-full flex-col gap-12 lg:flex-row">
        {/* Left side*/}
        <div
          className="flex flex-col items-center lg:flex-1 
            lg:items-start lg:justify-end"
        >
          <span className="font-poppins text-xl uppercase text-fourth">
            Hours
          </span>
          <Hours />
        </div>
        <FindContact className="hidden lg:block" />
        {/* Right side */}
        <div className="flex flex-col items-center lg:flex-1 lg:items-end ">
          <div className="flex flex-col gap-1">
            <span
              className="text-center font-poppins text-xl 
                uppercase text-fourth lg:text-start"
            >
              Socials
            </span>
            <SocialMediaIcons
              className="flex gap-4 text-white"
              iconClassName="w-8 h-8 cursor-pointer hover:stroke-third"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-base">© Restaurant. All Rights Reserved</p>
    </div>
  );
};

export default Footer;

const FindContact = ({ className }: { className?: string }) => (
  <div
    className={`lg:flex-1 ${className} flex flex-col items-center
      text-white lg:block`}
  >
    <span className="font-poppins text-xl uppercase text-fourth">
      Find & Contact Us
    </span>
    <div className="flex flex-col">
      <Directions
        className="text-center hover:text-third 
        hover:underline lg:text-start"
      >
        <span>
          1600 Pennsylvania <br /> Avenue NW, <br className="xl:hidden" />
          Washington, DC
        </span>
      </Directions>
      <PhoneNumber />
      <a
        href="mailto: restaurant@email.com"
        className="hover:text-third hover:underline"
      >
        restaurant@email.com
      </a>
    </div>
  </div>
);
