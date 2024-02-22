"use client";
import { useState } from "react";
import { DailySpecialModal } from "@/components";

const DailySpecial = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="bordered mt-5 flex flex-col gap-4 p-4 sm:mt-8">
      <h2 className="heading-sm">Daily special</h2>
      <p>
        Nulla cursus felis nec quam scelerisque hendrerit at vitae massa. Donec
        eget tempor est. Aenean nec justo nec ex sagittis posuere. Nam non metus
        iaculis, ullamcorper magna non, imperdiet felis. Nulla at felis eu quam
        suscipit pulvinar at aliquet dolor.
      </p>

      <button className="btn mt-4 self-end" onClick={() => setShowDialog(true)}>
        View Daily Special
      </button>
      <DailySpecialModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        priority
      />
    </div>
  );
};

export default DailySpecial;
