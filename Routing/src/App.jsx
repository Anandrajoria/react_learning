import Home from "./home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./home/About";
import Contact from "./home/Contact";
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<div>oops not availabe</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
