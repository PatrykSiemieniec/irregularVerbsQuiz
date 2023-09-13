import { createContext, useState } from "react";

interface defaultValue {
  infinitiveIndex: number;
  pastSimpleIndex: number;
  pastParticipleIndex: number;
  secondFocusPS: boolean;
  secondFocusPP: boolean;
  setInfinitiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setPastSimpleIndex: React.Dispatch<React.SetStateAction<number>>;
  setPastParticipleIndex: React.Dispatch<React.SetStateAction<number>>;
  setSecondFocusPS: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondFocusPP: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FocusContextProviderProps {
  children: React.ReactNode;
}

const defaultValue: defaultValue = {
  infinitiveIndex: 0,
  pastSimpleIndex: 0,
  pastParticipleIndex: 0,
  secondFocusPS: false,
  secondFocusPP: false,
  setInfinitiveIndex: () => {},
  setPastSimpleIndex: () => {},
  setPastParticipleIndex: () => {},
  setSecondFocusPS: () => {},
  setSecondFocusPP: () => {},
};

export const FocusContext = createContext(defaultValue);

export const FocusContextProvider: React.FC<FocusContextProviderProps> = ({
  children,
}) => {
  const [infinitiveIndex, setInfinitiveIndex] = useState<number>(0);
  const [pastSimpleIndex, setPastSimpleIndex] = useState<number>(0);
  const [pastParticipleIndex, setPastParticipleIndex] = useState<number>(0);
  const [secondFocusPS, setSecondFocusPS] = useState<boolean>(false);
  const [secondFocusPP, setSecondFocusPP] = useState<boolean>(false);

  const contextValue = {
    infinitiveIndex,
    pastSimpleIndex,
    pastParticipleIndex,
    secondFocusPS,
    secondFocusPP,
    setInfinitiveIndex,
    setPastSimpleIndex,
    setPastParticipleIndex,
    setSecondFocusPS,
    setSecondFocusPP,
  };

  return (
    <FocusContext.Provider value={contextValue}>
      {children}
    </FocusContext.Provider>
  );
};

export default FocusContext;
