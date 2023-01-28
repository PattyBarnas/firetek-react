import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/UIElements/Footer";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/firetek-react" element={<Hero />} exact></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
