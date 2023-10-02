import { breadCrumbs } from "@/types";
import { useNotify } from "@/hooks";

const useButtonEvents = (
  setSelectedCount: React.Dispatch<React.SetStateAction<number>>,
  crumbs: breadCrumbs[],
  block?: boolean,
) => {
  const [notified, notify] = useNotify(1500);

  const onNext = () => {
    if (!block) {
      setSelectedCount((prev) => (prev < crumbs.length ? prev + 1 : prev));
    } else {
      notify();
    }
  };

  const onBack = () => {
    setSelectedCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return { onNext, onBack, notified };
};

export default useButtonEvents;
