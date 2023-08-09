import { ReservationContextProvider } from "./contexts/ReservationContext";
import Reservation from "./components/Reservation";

const page = () => {
  return (
    <div className="flex h-[75%] justify-center bg-offwhite py-8 xsm:h-[70%] sm:h-[70%] xxl:h-[60%]">
      <div className="w-[90%] xsm:w-[60%] md:w-[45%] xxl:w-[33%]">
        <ReservationContextProvider>
          <Reservation />
        </ReservationContextProvider>
      </div>
    </div>
  );
};

export default page;
