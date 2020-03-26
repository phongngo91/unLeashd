import React from "react";

const Footer = props => {
  // Do not show footer on these pages
  if (
    props.location.pathname === "/" ||
    props.location.pathname === "/login" ||
    props.location.pathname === "/signup"
  ) {
    return null;
  }

  return (
    <div className="footer-container">
      <a target="_blank" title="GitHub" href="https://github.com/phongngo91">
        <div className="footer-links">GitHub</div>
      </a>
      <a
        target="_blank"
        title="LinkedIn"
        href="https://www.linkedin.com/in/phongngo91/"
      >
        <div className="footer-links">LinkedIn</div>
      </a>
      <a target="_blank" title="AngelList" href="https://angel.co/phong-ngo">
        <div className="footer-links">AngelList</div>
      </a>
      <a target="_blank" title="Portfolio" href="https://phongngo.net/">
        <div className="footer-links">Portfolio</div>
      </a>
    </div>
  );
};

export default Footer;
