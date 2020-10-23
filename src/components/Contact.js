import React from "react";
import "./Contact.css";

const Contact = (props) => (
  <div className="mainContainer">
    <div className="ig">
      <a href="https://www.instagram.com/andyybuiii/">
        <img src={require("./pictures/IG.png")} alt="NA" />
      </a>
    </div>

    <div className="ln">
      <a href="https://www.linkedin.com/in/andy-bui1016/">
        <img src={require("./pictures/linkedin.png")} alt="NA" />
      </a>
    </div>

    <div className="git">
      <a href="https://github.com/abui1016">
        <img src={require("./pictures/git.png")} alt="NA" />
      </a>
    </div>
  </div>
);

export default Contact;
