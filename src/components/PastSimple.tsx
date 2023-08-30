import React, { useState, FC, useContext, useEffect } from "react";
import { CountContext, ExceptionContext } from "../store";
import { tensesPropsTypes } from "../types";

const PastSimple: FC<tensesPropsTypes> = ({ index, item }) => {
  const [pastSimple, setPastSimple] = useState("");
  const [correct, setCorrect] = useState(false);
  const { pastSimpleException, setPastSimpleException, refresh } =
    useContext(ExceptionContext);
  const { setCount } = useContext(CountContext);

  const handlePastSimpleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toLowerCase().trim();
    setPastSimple(newValue);
    if (
      pastSimpleException !== newValue &&
      (newValue === item.pastSimple[0] || newValue === item.pastSimple[1])
    ) {
      setPastSimpleException(newValue);
      setCorrect(true);
      setCount((prev) => prev + 1);

      localStorage.setItem(item.id.toString() + "1" + index, newValue);

      if (item.pastSimple.length > 1) {
        const exceptionsLocalStorage = localStorage.getItem("exceptions");
        const id = item.id.toString() + "1" + index;
        let prevLocal;
        if (exceptionsLocalStorage) {
          prevLocal = JSON.parse(exceptionsLocalStorage);
        } else {
          prevLocal = {};
        }
        prevLocal[id] = newValue;
        localStorage.setItem("exceptions", JSON.stringify(prevLocal));
      }
    }
  };
  useEffect(() => {
    setPastSimple("");
    setCorrect(false);
    const localStoragePastSimple: string | null = localStorage.getItem(
      item.id.toString() + "1" + index
    );

    if (localStoragePastSimple) {
      const correctStorage = localStoragePastSimple?.length > 0;
      setPastSimple(localStoragePastSimple);
      setCorrect(correctStorage);
    }

    const pastSimpleExceptions = localStorage.getItem(
      item.id.toString() + "1" + index
    );
    if (pastSimpleExceptions) {
      setPastSimpleException(pastSimpleExceptions);
    }
  }, [refresh]);

  return (
    <fieldset
      style={{
        borderColor: correct ? "green" : "gray",
        color: correct ? "green" : "gray",
      }}
    >
      <legend>Past Simple</legend>
      <input
        disabled={correct}
        id={item.id.toString() + "1" + index}
        key={item.id.toString() + "1" + index}
        value={pastSimple}
        onChange={handlePastSimpleChange}
        style={{
          color: correct ? "green" : "gray",
        }}
      />
    </fieldset>
  );
};
export default PastSimple;
