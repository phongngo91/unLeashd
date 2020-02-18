import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Spash extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleLoginClick() {
    this.props.history.push("/login");
  }

  handleSignupClick() {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <nav className="splash-container">
        <ul className="splash-login-container">
          <button onClick={this.handleLoginClick} className="login-button">
            Sign In
          </button>
          <button onClick={this.handleSignupClick} className="signup-button">
            Create An Account
          </button>
        </ul>
        <ul className="masthead-content">
          <div className="description-content">
            <div className="dogPaw"/>
            <div className="unleashd-logo">unLeashd</div>
            <div className="unleashd-logo-sub">Pet Gently</div>
            <div className="short-rule"></div>
            <h4 className="unleashd-description">
              Discover and share your favorite dogs.
            </h4>
            <div className="home-icons">
              <span>
                <a title="GitHub" href="https://github.com/phongngo91">
                  <FontAwesomeIcon icon={faGithub} size="5x" color="white" />
                </a>
              </span>
              <span>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/phongngo91/"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="5x" color="white" />
                </a>
              </span>
            </div>
          </div>
          <div className="description-image">
            <div className="dogSelfie"/>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Spash;
