import { ExceptionContextProvider } from "./store/exception-context";
import { CountContextProvider } from "./store/count-context";
import { ScrollToTop, IrregularVerbsQuiz } from "./components";
import Footer from "./layout/Footer/Footer";
import { FocusContextProvider } from "./store/focus-context";

function App() {
  return (
    <FocusContextProvider>
      <CountContextProvider>
        <ExceptionContextProvider>
          <IrregularVerbsQuiz />
          <ScrollToTop />
          <Footer />
        </ExceptionContextProvider>
      </CountContextProvider>
    </FocusContextProvider>
  );
}

export default App;
