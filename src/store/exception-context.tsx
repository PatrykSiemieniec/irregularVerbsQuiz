import { createContext, useState } from "react";

interface defaultValue {
  pastSimpleException: string;
  pastParticipleException: string;
  setPastSimpleException: React.Dispatch<React.SetStateAction<string>>;
  setPastParticipleException: React.Dispatch<React.SetStateAction<string>>;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ExceptionContextProviderProps {
  children: React.ReactNode;
}

const defaultValue: defaultValue = {
  pastSimpleException: "",
  pastParticipleException: "",
  setPastSimpleException: () => {},
  setPastParticipleException: () => {},
  refresh: false,
  setRefresh: () => {},
};

export const ExceptionContext = createContext(defaultValue);

export const ExceptionContextProvider: React.FC<
  ExceptionContextProviderProps
> = ({ children }) => {
  const [pastSimpleException, setPastSimpleException] = useState<string>("");
  const [pastParticipleException, setPastParticipleException] =
    useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  const contextValue = {
    pastSimpleException,
    pastParticipleException,
    setPastSimpleException,
    setPastParticipleException,
    refresh,
    setRefresh,
  };

  return (
    <ExceptionContext.Provider value={contextValue}>
      {children}
    </ExceptionContext.Provider>
  );
};

export default ExceptionContext;
