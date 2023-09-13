import { FC, useContext } from "react";
import { SortAndFilterProps } from "../../types";
import { ExceptionContext, FocusContext } from "../../store";
import "./SortAndFilter.css";
const SortAndFilter: FC<SortAndFilterProps> = ({ sort, filter }) => {
  const { setRefresh } = useContext(ExceptionContext);
  const {
    setSecondFocusPP,
    setSecondFocusPS,
    setInfinitiveIndex,
    setPastParticipleIndex,
    setPastSimpleIndex,
  } = useContext(FocusContext);

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sort(e.target.value);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filter(e.target.value.toLowerCase());
  };

  return (
    <div className="sortandfilter">
      <select id="filter" onChange={handleChangeSort} defaultValue={"Sortuj"}>
        <option value="Sortuj" disabled hidden>
          Sortuj
        </option>
        <optgroup label="Sortuj po tłumaczeniu">
          <option id="translateAZ" value="translateAZ">
            A-Z
          </option>
          <option id="translateZA" value="translateZA">
            Z-A
          </option>
        </optgroup>
        <optgroup label="Sortuj po bezokoliczniku ">
          <option id="infinitiveAZ" value="infinitiveAZ">
            A-Z
          </option>
          <option id="infinitiveZA" value="infinitiveZA">
            Z-A
          </option>
        </optgroup>
        <optgroup label="Sortuj losowo">
          <option id="random" value="random">
            Losowo
          </option>
        </optgroup>
      </select>

      <input
        id="search"
        type="search"
        className="inputSearch"
        placeholder="Wyszukaj czasownik"
        onChange={handleFilterChange}
        pattern="^[a-z]"
      ></input>
      <button
        className="button"
        onClick={() => {
          localStorage.clear();
          setRefresh((prev) => !prev);
          setSecondFocusPP(false);
          setSecondFocusPS(false);
          setInfinitiveIndex(0);
          setPastSimpleIndex(0);
          setPastParticipleIndex(0);
        }}
      >
        Resetuj
      </button>
    </div>
  );
};

export default SortAndFilter;
