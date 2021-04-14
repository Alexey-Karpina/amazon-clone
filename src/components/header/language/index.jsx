import React from "react";
import "./language.css";
import usa from "../../../images/flags/usa.png";

const Language = () => {
  return (
    <div className="header__language">
      <img src={usa} alt="Page Language" />
    </div>
  );
};

export default Language;
