import { openHour, closeHour } from "@/constants";

const Hours = ({ spacing }: { spacing?: number }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <ul>
      {days.map((day, i) => {
        return (
          <li
            className={`flex justify-end pb-0 ${
              i !== days.length - 1 ? getSpacing(spacing) : "pb-0"
            }`}
            key={day}
          >
            <div className="w-28 overflow-hidden ">
              <span className="overflow-hidden">{`${day}.............................`}</span>
            </div>

            <div className="text-end">
              <span className="whitespace-nowrap">{`${formatTime(
                openHour,
              )} to ${formatTime(closeHour)}`}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Hours;

const formatTime = (hour: number): string => {
  return hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
};

const getSpacing = (spacing?: number): string => {
  switch (spacing) {
    case 1: {
      return "pb-1";
    }
    case 2: {
      return "pb-2";
    }
    case 3: {
      return "pb-3";
    }
    default: {
      return "pb-0";
    }
  }
};
