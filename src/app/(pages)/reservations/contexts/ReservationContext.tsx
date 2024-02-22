"use client";
import { createContext, useContext } from "react";
import useCurrentDate from "./hooks/useCurrentDate";
import useSelectedDate from "./hooks/useSelectedDate";
import useGuestNum from "./hooks/useGuestNum";

type ReservationContextProps = {
  currentDate: Date;
  selectedDate: Date;
  updateTime: (t: [number, number]) => void;
  updateDate: (value: string) => void;
  timeFlag: boolean;
  dateFlag: boolean;
  guestNum: number | undefined;
  updateGuestNum: (num: number) => void;
  guestFlag: boolean;
  times: [number, number][] | null;
};

const initialState: ReservationContextProps = {
  currentDate: new Date(),
  selectedDate: new Date(),
  updateTime: () => {},
  updateDate: () => {},
  timeFlag: false,
  dateFlag: false,
  guestNum: undefined,
  updateGuestNum: () => {},
  guestFlag: false,
  times: [],
};

const ReservationContext = createContext<ReservationContextProps>(initialState);

type ReservationContextProviderProps = {
  children: React.ReactNode;
};

export const ReservationContextProvider = ({
  children,
}: ReservationContextProviderProps) => {
  const currentDate = useCurrentDate();
  const { selectedDate, updateTime, updateDate, timeFlag, dateFlag, times } =
    useSelectedDate(currentDate);
  const { guestNum, updateGuestNum, guestFlag } = useGuestNum();

  const value = {
    currentDate,
    selectedDate,
    updateDate,
    updateTime,
    timeFlag,
    dateFlag,
    guestNum,
    updateGuestNum,
    guestFlag,
    times,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
