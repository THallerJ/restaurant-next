import { useEffect, useReducer } from "react";

const useLocalReducer = <T, S>(
  key: string,
  initialState: T,
  reducer: (state: T, action: S) => T,
) => {
  const getIntitialState = (): T => {
    if (typeof window !== undefined) {
      const jsonValue = localStorage.getItem(key);

      if (jsonValue) return JSON.parse(jsonValue);
    }

    return initialState;
  };

  const [reducerState, reducerDispatch] = useReducer(
    reducer,
    getIntitialState(),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reducerState));
  }, [reducerState, key]);

  return [reducerState, reducerDispatch] as const;
};

export default useLocalReducer;
