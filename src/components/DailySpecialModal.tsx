import { Modal } from "../hocs";
import Image from "next/image";
import { dailySpecial } from "@/constants/menu";

type DailySpecialModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  priority?: boolean;
};

const DailySpecialModal = ({
  showDialog,
  setShowDialog,
  priority,
}: DailySpecialModalProps) => {
  const Content = () => (
    <div className="flex flex-col items-center gap-4 text-start sm:flex-row sm:items-start">
      {dailySpecial.image ? (
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 ">
          <Image
            src={dailySpecial.image}
            className="w-full rounded-md"
            alt="daily-special"
            placeholder="blur"
            priority={priority}
          />
        </div>
      ) : null}
      <div className="flex w-full flex-col gap-1 sm:w-3/4 md:w-3/4 lg:w-4/5">
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
