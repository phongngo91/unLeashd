import React from "react";

const Footer = (props) => {
  // Do not show footer on these pages
  if (props.location.pathname === "/" ||
  props.location.pathname === "/login" ||
  props.location.pathname === "/signup"){
    return null;
  }

  return (
    <div className="footer-container">
      <a target="_blank" title="Portfolio" href="https://phongngo.net/">
        <div className="footer-links">Portfolio</div>
      </a>
    </div>
  );
};

export default Footer;
