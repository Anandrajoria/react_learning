// import Index from "./threeHooks";
// import CurrencyConverter from "./customHook/CurrencyConverter"
import Routing from "./Routing/routing";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Index/> */}
      {/* <CurrencyConverter/> */}
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
