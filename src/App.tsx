import { ExceptionContextProvider } from "./store/exception-context";
import { CountContextProvider } from "./store/count-context";
import { ScrollToTop, IrregularVerbsQuiz } from "./components";

function App() {
  return (
    <CountContextProvider>
      <ExceptionContextProvider>
        <IrregularVerbsQuiz />
        <ScrollToTop />
      </ExceptionContextProvider>
    </CountContextProvider>
  );
}

export default App;
