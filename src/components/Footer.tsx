import SocialMediaIcons from "./SocialMediaIcons";
import { hours } from "../constants";

const findContact = (styles?: string) => (
  <div
    className={`lg:flex-1 ${styles} flex flex-col items-center
      text-fourth lg:block`}
  >
    <span className="font-poppins text-xl uppercase text-third">
      Find & Contact Us
    </span>
    <div className="flex flex-col">
      <a
        href="http://maps.google.com/?q=1600 Pennsy lvania Avenue NW, Washington, DC 20500"
        className="text-start hover:text-third hover:underline"
        target="_blank"
        rel="noreferrer noopener"
      >
        1600 Pennsylvania <br className="lg:hidden" /> Avenue NW,{" "}
        <br className="lg:hidden" />
        Washington, DC
      </a>
      <a
        href="tel:1-123-555-6789"
        className="text-start hover:text-third hover:underline"
      >
        1-123-555-6789
      </a>
      <a
        href="mailto: restaurant@email.com"
        className="hover:text-third hover:underline"
      >
        restaurant@email.com
      </a>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div
      className="flex w-full flex-col gap-12 bg-dark pb-4 pt-14 font-medium 
      text-fourth lg:px-40"
    >
      {findContact("lg:hidden")}

      <div className="flex w-full flex-col gap-12 lg:flex-row">
        {/* Left side*/}
        <div className="flex flex-col items-center lg:flex-1 lg:items-start lg:justify-end">
          <span className="font-poppins text-xl uppercase text-third">
            Hours
          </span>
          <ul className="flex flex-col">
            {hours.map((item) => (
              <li key={item} className="text-start text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {findContact("hidden lg:block")}

        {/* Right side */}
        <div className="flex flex-col items-center lg:flex-1 lg:items-end ">
          <div className="flex flex-col gap-1">
            <span
              className="text-center font-poppins text-xl 
                uppercase text-third lg:text-start"
            >
              Socials
            </span>
            <SocialMediaIcons
              styles="text-white flex gap-4"
              iconStyles="w-[2rem] h-[2rem] cursor-pointer hover:stroke-third"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-base">© Restaurant. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
