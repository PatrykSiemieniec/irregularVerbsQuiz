import { FC, useState } from "react";
import "./Table.css";
import { tensesPropsTypes } from "../../types";
import Infinitive from "../Infinitive";
import PastSimple from "../PastSimple";
import PastParticiple from "../PastParticiple";
import Modal from "../../layout/Modal/Modal";

const Table: FC<tensesPropsTypes> = ({ item, index }) => {
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div key={index} className="table">
      {modal && <Modal closeModal={closeModal} item={item} index={index} />}
      <div className="translate">
        <div className="hint" onClick={() => setModal(true)}>
          <div className="hintCircle">?</div>
        </div>
        <b>{item.translate}</b>
      </div>
      <div className="infinitive">
        <Infinitive key={item.id} index={item.id} item={item} />
      </div>
      <div className="pastsimple">
        {item.pastSimple.map((_, indexPast) => (
          <PastSimple key={indexPast} index={indexPast} item={item} />
        ))}
      </div>
      <div className="pastparticiple">
        {item.pastParticiple.map((_, indexPP) => (
          <PastParticiple key={indexPP} index={indexPP} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Table;
