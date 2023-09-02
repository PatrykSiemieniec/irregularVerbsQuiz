import { useContext, useState, useEffect, useRef, createRef } from "react";
import {
  compare_AZ_Infinitive,
  compare_AZ_Translate,
  compare_ZA_Infinitive,
  compare_ZA_Translate,
  shuffle,
} from "../../utils/compare";
import CountContext from "../../store/count-context";
import Verbs, { IrregularVerbs } from "../../shared/verbs.model";
import { Header } from "../../layout";
import { SortAndFilter, Table, FinalResult } from "..";
import { ExceptionContext } from "../../store";

import "./IrregularVerbsQuiz.css";
const IrregularVerbsQuiz = () => {
  const { setCount, count } = useContext(CountContext);
  const { setRefresh, refresh } = useContext(ExceptionContext);

  const [sortAndFilterVerbs, setSortAndFilterVerbs] =
    useState<Verbs[]>(IrregularVerbs);

  const filterVerbs = (filter: string) => {
    const copyVerbs = [...IrregularVerbs];
    const filterVerbs = copyVerbs.filter((item) =>
      item.translate.includes(filter)
    );
    if (filterVerbs.length === 0) {
      ///
    }
    setSortAndFilterVerbs(filterVerbs);
    setRefresh((prev) => !prev);
  };

  const sortVerbs = (typeOfSort: string) => {
    const copyVerb = [...sortAndFilterVerbs];
    if (typeOfSort === "translateAZ") {
      setSortAndFilterVerbs(copyVerb.sort(compare_AZ_Translate));
    } else if (typeOfSort === "translateZA") {
      setSortAndFilterVerbs(copyVerb.sort(compare_ZA_Translate));
    } else if (typeOfSort === "infinitiveAZ") {
      setSortAndFilterVerbs(copyVerb.sort(compare_AZ_Infinitive));
    } else if (typeOfSort === "infinitiveZA") {
      setSortAndFilterVerbs(copyVerb.sort(compare_ZA_Infinitive));
    } else if (typeOfSort === "random") {
      setSortAndFilterVerbs(shuffle(copyVerb));
    }
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    setCount(0);
    localStorage.setItem("exceptions", JSON.stringify({}));
    const localStorageCount = localStorage.length;
    if (localStorageCount === 0) {
      setCount(localStorageCount);
    } else if (localStorageCount > 1) {
      setCount(localStorageCount - 1); //skip exceptions to be counted as irregular verb
    }
  }, [refresh]);

  const tableRefs = useRef([]);

  if (tableRefs.current.length !== sortAndFilterVerbs.length) {
    tableRefs.current = Array(sortAndFilterVerbs.length)
      .fill(null)
      .map((_, index) => tableRefs.current[index] || createRef());
  }

  const content = () => {
    if (count === 317) {
      return <FinalResult />;
    } else {
      return (
        <>
          <Header count={count} />
          <SortAndFilter filter={filterVerbs} sort={sortVerbs} />
          {sortAndFilterVerbs.map((item, index) => (
            <Table
              ref={tableRefs.current[index]}
              key={index}
              item={item}
              index={index}
            />
          ))}
        </>
      );
    }
  };

  return <div className="main">{content()}</div>;
};

export default IrregularVerbsQuiz;