import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import ErrorPage from "./Components/error/ErrorPage";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />                 {/* default path*/}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    

  </>;
}

export default App;
