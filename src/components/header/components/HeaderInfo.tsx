import { Phone, Location } from "../../../assets";

const HeaderInfo = () => {
  return (
    <>
      <div className="flex items-center pr-7">
        <Phone className="mr-2 h-[1em] w-[1em]" />
        <a
          href="tel:1-123-555-6789"
          className="font-poppins text-sm font-medium text-fourth 
            hover:text-third hover:underline"
        >
          1-123-555-6789
        </a>
      </div>
      <div className="flex items-center">
        <Location className="mr-2 h-[1em] w-[1em]" />
        <a
          href="http://maps.google.com/?q=1600 Pennsylvania Avenue NW, Washington, DC 20500"
          className="font-poppins text-sm font-medium text-fourth
            hover:text-third hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          1600 Pennsylvania Avenue NW, Washington, DC
        </a>
      </div>
    </>
  );
};

export default HeaderInfo;
