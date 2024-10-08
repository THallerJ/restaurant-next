import { ReservationContextProvider } from "./contexts/ReservationContext";
import ReservationCrumbs from "./components/ReservationCrumbs";

const page = () => {
  return (
    <div className="flex min-h-[66%] justify-center bg-offwhite py-8">
      <div className="w-11/12 xsm:w-3/5 md:w-5/12 xxl:w-1/3">
        <ReservationContextProvider>
          <ReservationCrumbs />
        </ReservationContextProvider>
      </div>
    </div>
  );
};

export default page;
