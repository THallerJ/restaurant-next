import { Modal } from "../hocs";
import { dailySpecial } from "../assets";
import Image from "next/image";

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
      <Image
        src={dailySpecial}
        className="w-full rounded-2xl sm:w-[50%] lg:w-[35%]"
        alt="daily-special"
      />

      <div className="lg:w-[65%]">
        <h4 className="text-2xl font-semibold text-dark">Egg Burger</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          maximus rutrum eros, tristique mollis tellus convallis quis. Cras nec
          sodales erat, vel ultrices leo. Duis pharetra arcu at nisl egestas
          maximus. Aenean sed congue odio, eget ultrices erat. Praesent
          tincidunt fringilla tellus eget pellentesque. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Integer blandit, mi quis
          sagittis maximus, risus elit laoreet dolor, aliquam fringilla ligula
          elit ut sapien.
        </p>
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
