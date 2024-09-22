import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/services");
  };
  return (
    <>
      <main className="hero-section-main">
        <div className="hero-image" />
        <div className="hero-section">
          <div className="hero">
            <h1 className="hero-title">Bringing comfort to your home.</h1>
            <p>
              Chicago's weather may be unpredictable, but with{" "}
              <span>Firetek HVAC</span>, you're always covered! We provide
              top-notch heating and cooling services, available 24/7 to ensure
              your comfort. Count on us for reliable, high-quality service
              whenever you need it.
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
      {/* <h3>Why Firetek?</h3> */}
    </>
  );
};
export default Hero;
