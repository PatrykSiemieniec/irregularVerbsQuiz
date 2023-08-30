import "./App.css";

import { ExceptionContextProvider } from "./store/exception-context";
import Game from "./Game";
import { CountContextProvider } from "./store/count-context";

function App() {
  return (
    <CountContextProvider>
      <ExceptionContextProvider>
        <Game />
      </ExceptionContextProvider>
    </CountContextProvider>
  );
}

export default App;
