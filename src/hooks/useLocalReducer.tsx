import { useState, useEffect, useReducer } from "react";

const useLocalReducer = <T, S>(
  key: string,
  initialState: T,
  reducer: (state: T, action: S) => T,
) => {
  const [init, setInit] = useState(false);

  const buildReducer = (state: T, action: S | "reset"): T => {
    if (action === "reset") {
      const jsonValue = localStorage.getItem(key);
      const val = jsonValue ? JSON.parse(jsonValue) : initialState;
      return val;
    } else return reducer(state, action);
  };

  const [reducerState, reducerDispatch] = useReducer(
    buildReducer,
    initialState,
  );

  useEffect(() => {
    reducerDispatch("reset");
    setInit(true);
  }, []);

  useEffect(() => {
    if (init) localStorage.setItem(key, JSON.stringify(reducerState));
  }, [reducerState, key]);

  return [reducerState, reducerDispatch, init] as const;
};

export default useLocalReducer;
