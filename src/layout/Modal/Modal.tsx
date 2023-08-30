import { FC, useState } from "react";
import "./Modal.css";
import { tensesPropsTypes } from "../../types";
const Modal: FC<tensesPropsTypes> = ({ closeModal, item }) => {
  const [infinitiveHint, setInfinitiveHint] = useState(false);
  const [pastSimpleHint, setPastSimpleHint] = useState({
    first: false,
    second: false,
  });
  const [pastParticipleHint, setPastParticipleHint] = useState({
    first: false,
    second: false,
  });
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
    <div className="background">
      <div className="container">
        <span>Wskazówka!</span>
        <em>Naciśnij wybrany czasownik aby poznać go w całości!</em>
        <b>{item.translate}</b>
        <button className="closeModal" onClick={closeModal}>
          X
        </button>
        <section>
          <span>
            <em>Infinitive</em>
            <br />
            <b
              style={{ color: infinitiveHint ? "green" : "white" }}
              onClick={() => setInfinitiveHint(true)}
              className="verb"
            >
              {infinitiveHint ? item.infinitive : modifyString(item.infinitive)}
            </b>
          </span>
          <span>
            <em>Past Simple</em>
            <br />
            <b
              style={{ color: pastSimpleHint.first ? "green" : "white" }}
              className="verb"
              onClick={() =>
                setPastSimpleHint((prev) => ({ ...prev, first: true }))
              }
            >
              {pastSimpleHint.first
                ? item.pastSimple[0]
                : modifyString(item.pastSimple[0])}
            </b>
            <br />
            <b
              style={{ color: pastSimpleHint.second ? "green" : "white" }}
              className="verb"
              onClick={() =>
                setPastSimpleHint((prev) => ({ ...prev, second: true }))
              }
            >
              {pastSimpleHint.second
                ? item.pastSimple[1]
                : modifyString(item.pastSimple[1])}
            </b>
          </span>
          <span>
            <em>Past Participle</em>
            <br />
            <b
              style={{ color: pastParticipleHint.first ? "green" : "white" }}
              className="verb"
              onClick={() =>
                setPastParticipleHint((prev) => ({ ...prev, first: true }))
              }
            >
              {pastParticipleHint.first
                ? item.pastParticiple[0]
                : modifyString(item.pastParticiple[0])}
            </b>
            <br />
            <b
              style={{ color: pastParticipleHint.second ? "green" : "white" }}
              className="verb"
              onClick={() =>
                setPastParticipleHint((prev) => ({ ...prev, second: true }))
              }
            >
              {pastParticipleHint.second
                ? item.pastParticiple[1]
                : modifyString(item.pastParticiple[1])}
            </b>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Modal;
