"use client";
import { useState } from "react";
import { Directions } from "@/components";
import { formatTime } from "@/utils";
import OrderForm from "./components/OrderForm";

const SubmitPage = () => {
  const [submittedFlag, setSubmittedFlag] = useState(false);
  const [time, setTime] = useState<[number, number] | null>(null);

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      {!submittedFlag ? (
        <OrderForm
          setSubmittedFlag={setSubmittedFlag}
          time={time}
          setTime={setTime}
        />
      ) : (
        <Submitted time={time} />
      )}
    </div>
  );
};

export default SubmitPage;

const Submitted = ({ time }: { time: [number, number] | null }) => (
  <div className="page-scale flex h-full items-center justify-center">
    <p className="rounded-lg bg-white p-4 shadow-md">
      Your order has been submitted! You can pick up your food at{" "}
      {time ? formatTime(...time) : null}! Click <Directions>here</Directions>{" "}
      for directions to the restaurant!
    </p>
  </div>
);
