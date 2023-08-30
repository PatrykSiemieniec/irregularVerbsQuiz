import React, { FC } from "react";
import "./Modal.css";
import { tensesPropsTypes } from "../../types";
const Modal: FC<tensesPropsTypes> = ({ closeModal, item }) => {
  const modifyString = (item: string) => {
    const inputInfinitive = item;
    if (!item) {
      return;
    }
    if (inputInfinitive.length < 3) {
      return (
        inputInfinitive.substring(0, 1) + "_" + inputInfinitive.substring(2)
      );
    } else {
      const length = inputInfinitive.length;
      const firstCharacter = inputInfinitive.charAt(0);
      const lastCharacter = inputInfinitive.charAt(length - 1);
      const restOfCharacter = length - 2;

      let dashes = "";
      for (let i = 0; i < restOfCharacter; i++) {
        dashes += " _ ";
      }

      return firstCharacter + dashes + lastCharacter;
    }
  };

  return (
    <div className="background" onClick={closeModal}>
      <div className="container">
        <span>Wskazówka!</span>
        <b>{item.translate}</b>
        <button className="closeModal" onClick={closeModal}>
          X
        </button>
        <section>
          <span>
            <em>Infinitive</em>
            <br />
            <b> {modifyString(item.infinitive)}</b>
          </span>
          <span>
            <em>Past Simple</em>
            <br />
            <b>{modifyString(item.pastSimple[0])}</b>
            <br />
            <b>{modifyString(item.pastSimple[1])}</b>
          </span>
          <span>
            <em>Past Participle</em>
            <br />
            <b>{modifyString(item.pastParticiple[0])}</b>
            <br />
            <b>{modifyString(item?.pastParticiple[1])}</b>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Modal;
