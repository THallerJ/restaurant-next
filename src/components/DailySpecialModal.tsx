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
  const Content = () => (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      {dailySpecial.image ? (
        <Image
          src={dailySpecial.image}
          className="w-full rounded-2xl sm:w-[50%] lg:w-[25%]"
          alt="daily-special"
        />
      ) : null}
      <div className="flex flex-col gap-1 lg:w-[65%]">
        <h4 className="text-xl font-semibold text-dark">{dailySpecial.name}</h4>
        <p className="text-base">{dailySpecial.details}</p>
      </div>
    </div>
  );

  return (
    <Modal
      title="Today's Daily Special"
      content={<Content />}
      showDialog={showDialog}
      setShowDialog={setShowDialog}
    />
  );
};

export default DailySpecialModal;
