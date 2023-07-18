"use client";
import { useRef } from "react";
import { useNotify } from "@/hooks";

type MailWrapperProps = {
  submitted: React.ReactNode;
  label: React.ReactNode;
  input: React.ReactNode;
};

const MailWrapper = ({ submitted, label, input }: MailWrapperProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const [notified, notify] = useNotify();

  return (
    <form
      ref={ref}
      className="flex h-[35vh] flex-col items-center justify-center bg-second"
      onSubmit={(e) => {
        e.preventDefault();
        notify();
      }}
    >
      {notified ? (
        submitted
      ) : (
        <>
          {label}
          <div className="relative">{input}</div>
          <button type="submit" className="btn w-[19rem]">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default MailWrapper;
