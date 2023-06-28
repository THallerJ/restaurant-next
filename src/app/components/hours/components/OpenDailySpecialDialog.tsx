"use client";
import { useState } from "react";
import { DailySpecialModal } from "../../../../components";

const OpenDailySpecialDialog = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <>
      <button
        className="btn mt-4 w-full self-start"
        onClick={() => {
          setShowDialog(true);
        }}
      >
        View Daily Special
      </button>
      <DailySpecialModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </>
  );
};

export default OpenDailySpecialDialog;
