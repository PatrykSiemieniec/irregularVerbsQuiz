import { ExceptionContextProvider } from "./store/exception-context";
import { CountContextProvider } from "./store/count-context";
import { ScrollToTop, IrregularVerbsQuiz } from "./components";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <CountContextProvider>
      <ExceptionContextProvider>
        <IrregularVerbsQuiz />
        <ScrollToTop />
        <Footer />
      </ExceptionContextProvider>
    </CountContextProvider>
  );
}

export default App;
