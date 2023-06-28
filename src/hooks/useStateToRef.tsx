import { useEffect, useRef } from "react";

// this hook copies a state into a ref
const useStateToRef = <T,>(state: T) => {
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};

export default useStateToRef;
