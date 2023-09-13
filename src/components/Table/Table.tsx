import { useState } from "react";
import "./Table.css";
import { tensesPropsTypes } from "../../types";
import { Infinitive, PastParticiple, PastSimple } from "..";
import { Modal } from "../../layout";
import { Verbs } from "../../shared";

const Table = ({
  index,
  item,
  pastParticipleRef,
  infinitiveRef,
  pastSimpleRef,
}: tensesPropsTypes) => {
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = () => {
    setModal(false);
  };

  const handlePastSimpleRef = (
    item: Verbs,
    el: HTMLInputElement | null,
    indexPast: number
  ) => {
    if (pastSimpleRef) {
      pastSimpleRef.current[item.pastSimple[indexPast].id] = el!;
    }
  };
  const handlePastPerfectRef = (
    item: Verbs,
    el: HTMLInputElement | null,
    indexPP: number
  ) => {
    if (pastParticipleRef) {
      pastParticipleRef.current[item.pastParticiple[indexPP].id] = el!;
    }
  };
  return (
    <>
      {modal && <Modal closeModal={closeModal} item={item} index={index} />}
      <div key={index} className="table">
        <div className="translate">
          <div className="hint" onClick={() => setModal(true)}>
            <div className="hintCircle">?</div>
          </div>
          <b>{item.translate}</b>
        </div>
        <div className="infinitive">
          <Infinitive
            ref={(el) =>
              infinitiveRef ? (infinitiveRef.current[item.id] = el!) : null
            }
            key={item.id}
            index={item.id}
            item={item}
          />
        </div>
        <div className="pastsimple">
          {item.pastSimple.map((_, indexPast) => {
            return (
              <PastSimple
                ref={(el) => handlePastSimpleRef(item, el, indexPast)}
                key={indexPast}
                index={indexPast}
                item={item}
              />
            );
          })}
        </div>
        <div className="pastparticiple">
          {item.pastParticiple.map((_, indexPP) => (
            <PastParticiple
              ref={(el) => handlePastPerfectRef(item, el, indexPP)}
              key={indexPP}
              index={indexPP}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Table;
