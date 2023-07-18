"use client";
import { InputList } from "@/components";
import { useReservation } from "../contexts/ReservationContext";
import { formatDate, formatTime } from "../utils";
import { People, Time } from "@/assets";

const DateTime = () => {
  const {
    currentDate,
    selectedDate,
    updateTime,
    updateDate,
    timeFlag,
    times,
    updateGuestNum,
    guestNum,
  } = useReservation();

  const displaySelectedTime = (): string => {
    if (!timeFlag)
      return times && times.length
        ? formatTime(times[0][0], times[0][1])
        : "- -";
    return formatTime(selectedDate.getHours(), selectedDate.getMinutes());
  };

  const inputStyle =
    "h-full min-h-[3.5em] w-44 rounded-lg border-2 border-dark px-3 shadow-md";

  const guestNums = [1, 2, 3, 4, 5, 6, 7, 8];

  const getGuest = (item: number) => {
    return `${item} ${item === 1 ? "person" : "people"}`;
  };

  return (
    <div className="flex h-full items-center justify-center pt-4">
      <div className="flex flex-col space-y-2 xl:flex-row xl:space-x-2 xl:space-y-0">
        <InputList
          id="selectGuestNum"
          text={guestNum ? `${getGuest(guestNum)}` : undefined}
          style={inputStyle}
          items={guestNums}
          placeholder="# of Guests"
          onSelect={updateGuestNum}
          format={(item) => `${getGuest(item)}`}
          Icon={People}
        />
        <input
          id="selectDate"
          type="date"
          min={formatDate(currentDate)}
          value={formatDate(selectedDate)}
          className={inputStyle}
          onChange={(e) => updateDate(e.target.value)}
        />
        <InputList
          id="selectTime"
          style={inputStyle}
          items={times ? times : null}
          text={displaySelectedTime()}
          onSelect={updateTime}
          format={(item) => formatTime(item[0], item[1])}
          Icon={Time}
        />
      </div>
    </div>
  );
};

export default DateTime;
