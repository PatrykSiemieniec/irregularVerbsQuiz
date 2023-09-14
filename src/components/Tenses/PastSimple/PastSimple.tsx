import React, { useState, useContext, useEffect, forwardRef } from "react";
import { CountContext, ExceptionContext, FocusContext } from "../../../store";
import { tensesPropsTypes } from "../../../types";

const PastSimple = forwardRef(
  ({ index, item }: tensesPropsTypes, ref: React.Ref<HTMLInputElement>) => {
    const [pastSimple, setPastSimple] = useState("");
    const [correct, setCorrect] = useState(false);

    const { pastSimpleException, setPastSimpleException, refresh } =
      useContext(ExceptionContext);

    const { setCount } = useContext(CountContext);

    const {
      setPastParticipleIndex,
      setPastSimpleIndex,
      secondFocusPS,
      setSecondFocusPS,
    } = useContext(FocusContext);

    const handlePastSimpleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.toLowerCase().trim();
      setPastSimple(newValue);
      if (
        pastSimpleException !== newValue &&
        (newValue === item?.pastSimple[0]?.form ||
          newValue === item?.pastSimple[1]?.form)
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
        if (item.pastSimple.length > 1 && !secondFocusPS) {
          setPastSimpleIndex(item.pastSimple[1].id);
          setSecondFocusPS(true);
        } else {
          setPastParticipleIndex(item.pastParticiple[0].id);
          setSecondFocusPS(false);
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
          ref={ref}
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
  }
);
export default PastSimple;
