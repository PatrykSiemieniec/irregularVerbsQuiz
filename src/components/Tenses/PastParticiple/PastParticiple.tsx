import React, { useState, FC, useContext, useEffect } from "react";
import { tensesPropsTypes } from "../../../types";
import { CountContext, ExceptionContext } from "../../../store";

const PastParticiple: FC<tensesPropsTypes> = ({ index, item }) => {
  const [pastParticiple, setPastParticiple] = useState("");
  const [correct, setCorrect] = useState(false);

  const { pastParticipleException, setPastParticipleException, refresh } =
    useContext(ExceptionContext);
  const { setCount } = useContext(CountContext);

  const handlePastParticipleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value.toLowerCase().trim();
    setPastParticiple(newValue);

    if (
      pastParticipleException !== newValue &&
      (newValue === item.pastParticiple[0] ||
        newValue === item.pastParticiple[1])
    ) {
      setPastParticipleException(newValue);
      setCorrect(true);
      setCount((prev) => prev + 1);

      localStorage.setItem(item.id.toString() + "2" + index, newValue);

      if (item.pastParticiple.length > 1) {
        const exceptionsLocalStorage = localStorage.getItem("exceptions");
        const id = item.id.toString() + "2" + index;
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
    setPastParticiple("");
    setCorrect(false);
    const localStoragePastParticiple: string | null = localStorage.getItem(
      item.id.toString() + "2" + index
    );

    if (localStoragePastParticiple) {
      const correctStorage = localStoragePastParticiple?.length > 0;
      setPastParticiple(localStoragePastParticiple);
      setCorrect(correctStorage);
    }

    const pastSimpleExceptions = localStorage.getItem(
      item.id.toString() + "2" + index
    );
    if (pastSimpleExceptions) {
      setPastParticipleException(pastSimpleExceptions);
    }
  }, [refresh]);
  return (
    <fieldset
      style={{
        borderColor: correct ? "green" : "gray",
        color: correct ? "green" : "gray",
      }}
    >
      <legend>Past Participle</legend>
      <input
        disabled={correct}
        id={item.id.toString() + "2" + index}
        key={item.id.toString() + "2" + index}
        value={pastParticiple}
        onChange={handlePastParticipleChange}
        style={{
          color: correct ? "green" : "gray",
        }}
      />
    </fieldset>
  );
};

export default PastParticiple;
