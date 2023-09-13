import React, { useState, useContext, useEffect, forwardRef } from "react";
import { CountContext, ExceptionContext, FocusContext } from "../../../store";
import { tensesPropsTypes } from "../../../types";

const Infinitive = forwardRef(
  ({ item }: tensesPropsTypes, ref: React.Ref<HTMLInputElement>) => {
    const [infinitive, setInfinitive] = useState("");
    const [correct, setCorrect] = useState(false);

    const { setCount } = useContext(CountContext);
    const { refresh } = useContext(ExceptionContext);
    const { setPastSimpleIndex } = useContext(FocusContext);

    const handleInfinitiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.toLowerCase().trim();
      setInfinitive(newValue);
      if (newValue === item.infinitive) {
        setCorrect(true);
        setCount((prev) => prev + 1);

        localStorage.setItem(item.id.toString(), newValue);
        setPastSimpleIndex(item.pastSimple[0].id);
      }
    };

    useEffect(() => {
      setInfinitive("");
      setCorrect(false);
      const localStorageInfinitive: string | null = localStorage.getItem(
        item.id.toString()
      );

      if (localStorageInfinitive) {
        const correctStorage = localStorageInfinitive?.length > 0;
        setInfinitive(localStorageInfinitive);
        setCorrect(correctStorage);
      }
    }, [refresh]);

    return (
      <fieldset
        style={{
          borderColor: correct ? "green" : "gray",
          color: correct ? "green" : "gray",
        }}
      >
        <legend>Infinitive</legend>
        <input
          ref={ref}
          disabled={correct}
          id={item.id.toString()}
          key={item.id.toString()}
          value={infinitive}
          onChange={handleInfinitiveChange}
          style={{
            color: correct ? "green" : "gray",
          }}
        />
      </fieldset>
    );
  }
);

export default Infinitive;
