import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/UIElements/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Hero />} exact></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
