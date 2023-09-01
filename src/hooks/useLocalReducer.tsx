import { useEffect, useReducer } from "react";

type useLocalReducerProps<T, S, R> = {
  initialState: T;
  reducer: (state: S, action: R) => T;
  key: string;
};

const useLocalReducer = <T, S, R>(
  key: string,
  initialState: T,
  reducer: (state: S, action: R) => T,
) => {
  const getIntitialState = (): T => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue) return JSON.parse(jsonValue);

    return initialState;
  };

  const [reducerState, reducerDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reducerState));
  }, [reducerState, key]);

  return [reducerState, reducerDispatch];
};

export default useLocalReducer;
