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
            Chicago weather is unpredicatable, but don't worry{" "}
            <span>Firetek HVAC</span> got you covered! providing you our heating
            and cooling services. We run 24/7 and are ready to serve quality
            work.
          </p>
          <button
            className="btn-learn-more"
            aria-label="button to services page"
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
