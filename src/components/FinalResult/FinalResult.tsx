import { useContext } from "react";
import { ExceptionContext } from "../../store";
import "./FinalResult.css";
import ReactConfetti from "react-confetti";
const FinalResult = () => {
  const { setRefresh } = useContext(ExceptionContext);
  return (
    <div className="finalResult">
      <ReactConfetti />
      <b>GRATULACJE!</b> <span>Znasz wszystkie czasowniki nieregularne!</span>
      <button
        className="button"
        onClick={() => {
          localStorage.clear();
          setRefresh((prev) => !prev);
        }}
      >
        Zacznij od nowa!
      </button>
    </div>
  );
};

export default FinalResult;
