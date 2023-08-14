import { Modal } from "../hocs";
import Image from "next/image";
import { dailySpecial } from "@/constants/Menu";

type DailySpecialModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const DailySpecialModal = ({
  showDialog,
  setShowDialog,
}: DailySpecialModalProps) => {
  const content = (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      {dailySpecial.image ? (
        <Image
          src={dailySpecial.image}
          className="w-full rounded-2xl sm:w-[50%] lg:w-[25%]"
          alt="daily-special"
        />
      ) : null}
      <div className="lg:w-[65%]">
        <h4 className="text-2xl font-semibold text-dark">
          {dailySpecial.name}
        </h4>
        <p className="text-base">{dailySpecial.details}</p>
      </div>
    </div>
  );

  return (
    <Modal
      title="Today's Daily Special"
      content={content}
      showDialog={showDialog}
      setShowDialog={setShowDialog}
    />
  );
};

export default DailySpecialModal;
