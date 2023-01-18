import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/services");
  };
  return (
    <main className="hero-section-main">
      <div className="hero-section">
        <div className="hero">
          <h1 className="hero-title">Providing comfort at home.</h1>
          <p>
            Chicago weather is unpredicatable, but don't worry we got you
            covered! providing you our heating and cooling services.
          </p>
        </div>
        <div className="btn-container">
          <button
            className="btn-learn-more"
            href=""
            onClick={buttonClickHandler}
          >
            Learn more
          </button>
        </div>
      </div>
    </main>
  );
};
export default Hero;
