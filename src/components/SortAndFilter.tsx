import { FC, useContext, useState } from "react";
import { SortAndFilterProps } from "../types";
import { ExceptionContext } from "../store";

const SortAndFilter: FC<SortAndFilterProps> = ({ sort, filter }) => {
  const { setRefresh } = useContext(ExceptionContext);

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sort(e.target.value);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filter(e.target.value.toLowerCase());
  };

  return (
    <div className="sortandfilter">
      <select id="filter" onChange={handleChangeSort}>
        <option>Sortuj</option>
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
        placeholder="Wyszukaj czasownik"
        onChange={handleFilterChange}
        pattern="^[a-z]"
      ></input>
      <button
        className="button"
        onClick={() => {
          localStorage.clear();
          setRefresh((prev) => !prev);
        }}
      >
        Resetuj
      </button>
    </div>
  );
};

export default SortAndFilter;
