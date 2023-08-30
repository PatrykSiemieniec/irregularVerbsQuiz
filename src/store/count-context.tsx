import { createContext, useState } from "react";

interface defaultValue {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
interface CountContextProviderProps {
  children: React.ReactNode;
}

const defaultValue: defaultValue = {
  count: 0,
  setCount: () => {},
};

export const CountContext = createContext(defaultValue);

export const CountContextProvider: React.FC<CountContextProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const contextValue = {
    count,
    setCount,
  };

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContext;
