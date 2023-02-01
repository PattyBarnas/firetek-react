import "./SocialLinks.css";
import React from "react";

const socialLinks = () => {
  return (
    <div className="social-links">
      <div className="social-link">
        <a href="https://www.facebook.com/profile.php?id=100083190129445">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
      <div className="social-link">
        <a href="mailto:firetekhvac@gmail.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </div>
      <div className="social-link">
        <a href="https://www.instagram.com/ta_beskitu/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default socialLinks;
