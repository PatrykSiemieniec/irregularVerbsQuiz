import React, { useState, useContext, useEffect, forwardRef } from "react";
import { tensesPropsTypes } from "../../../types";
import { CountContext, ExceptionContext, FocusContext } from "../../../store";

const PastParticiple = forwardRef(
  ({ index, item }: tensesPropsTypes, ref: React.Ref<HTMLInputElement>) => {
    const [pastParticiple, setPastParticiple] = useState("");
    const [correct, setCorrect] = useState(false);

    const { pastParticipleException, setPastParticipleException, refresh } =
      useContext(ExceptionContext);
    const { setCount } = useContext(CountContext);
    const {
      setInfinitiveIndex,
      secondFocusPP,
      setSecondFocusPP,
      setPastParticipleIndex,
    } = useContext(FocusContext);

    const handlePastParticipleChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newValue = e.target.value.toLowerCase().trim();
      setPastParticiple(newValue);

      if (
        pastParticipleException !== newValue &&
        (newValue === item.pastParticiple[0]?.form ||
          newValue === item.pastParticiple[1]?.form)
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
        if (item.pastParticiple.length > 1 && !secondFocusPP) {
          setPastParticipleIndex((prev) => prev + 1);
          setSecondFocusPP(true);
        } else {
          setInfinitiveIndex(item.id + 1);
          setSecondFocusPP(false);
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
          ref={ref}
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
  }
);

export default PastParticiple;
