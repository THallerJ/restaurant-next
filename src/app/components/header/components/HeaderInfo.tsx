import { Phone, Location } from "@/assets";
import { Directions, PhoneNumber } from "@/components";

const HeaderInfo = () => {
  return (
    <>
      <div className="flex items-center pr-7">
        <Phone className="mr-2 h-4 w-4" />
        <PhoneNumber
          className="text-sm font-medium text-fourth 
            hover:text-third hover:underline"
        />
      </div>
      <div className="flex items-center">
        <Location className="mr-2 h-4 w-4" />
        <Directions
          className="text-sm font-medium text-fourth
            hover:text-third hover:underline"
        />
      </div>
    </>
  );
};

export default HeaderInfo;
