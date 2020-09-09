import { useReducer, useEffect } from "react";

export default function useLocalStorageReducer(reducer, key, defaultValue) {
  const savedState = JSON.parse(localStorage.getItem(key));
  const [state, dispatch] = useReducer(
    reducer,
    defaultValue,
    () => savedState || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, dispatch];
}
