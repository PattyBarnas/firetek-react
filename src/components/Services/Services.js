import "./Services.css";
import React from "react";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-header">What we do</h2>
      <p className="services-ad">
        Free estimates and <br />7 days a week services
      </p>
      <div className="services"></div>
      <div className="services-provided">
        <div className="ac-services">
          <span>01.</span>
          <h3>Air conditioning services and installation</h3>
          <p>
            Cooling services in Chicago and surrounding areas. Our skilled
            technicians can identify and fix any issue. Providing Air
            conditioner installation, maintenance, repair and replacement.
          </p>
        </div>
        <div className="ac">
          <img
            className="ac-unit"
            src={require("../../images/air-conditioner.jpg")}
            alt="ac-unit"
          />
        </div>
        <div className="furnace-services">
          <span>02.</span>
          <h3>Furnace services and installation</h3>
          <p>We </p>
        </div>
        <div className="furnace-img">
          <img
            className="furnace-unit"
            src={require("../../images/f-p.jpg")}
            alt="furnace-unit"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
