import { FC } from "react";
import { headerProps } from "../types";

const Header: FC<headerProps> = ({ count }) => {
  const polishVerbsVariant = () => {
    if (count === 1) {
      return "czasownik nieregularny.";
    } else if (count > 1 && count < 5) {
      return "czasowniki nieregularne.";
    } else {
      return "czasowników nieregularnych.";
    }
  };
  return (
    <header>
      <span>
        Wspaniale! Znasz już:
        <b>
          <em>{count}</em>
        </b>
        {polishVerbsVariant()}
      </span>
    </header>
  );
};

export default Header;
