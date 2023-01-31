import "./SocialLinks.css";
import React from "react";

const socialLinks = () => {
  return (
    <React.Fragment>
      <div className="facebook-link">
        <a href="https://www.facebook.com/profile.php?id=100083190129445">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
      <div className="email">
        <ion-icon name="mail-outline"></ion-icon>
        <p>FiretekHvac@gmail.com</p>
      </div>
      <div>
        <a href="https://www.instagram.com/ta_beskitu/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
    </React.Fragment>
  );
};

export default socialLinks;
