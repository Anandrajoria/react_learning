import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
function Routing() {
  return (
    <>
      
      <Routes>
        <Route path="/" Component={About} />
        <Route path="/Contact" Component={Contact} />
        <Route path='*' Component={ErrorPage} />
      </Routes>
    </>
  );
}

export default Routing;
