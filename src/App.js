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

function App() {
  return (
    <Router>
      <MainNavigation />

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/services" element={<h1>hi</h1>}></Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </Router>
  );
}

export default App;
