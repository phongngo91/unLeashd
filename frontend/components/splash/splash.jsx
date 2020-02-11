import React from "react";

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
      <nav 
      className="splash-container"
      style={{ 
        backgroundImage: 
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url(${window.dogParkURL})`
        }}>
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
            <img className="dog-paw" src={window.dogPawURL} alt="dog-paw"/>
            <div className="unleashd-logo">unLeashd</div>
            <div className="unleashd-logo-sub">Pet Gently</div>
            <div className="short-rule"></div>
            <h4 className="unleashd-description">
              Discover and share your favorite dogs.
            </h4>
          </div>
          <div className="description-image">
            <img src={window.dogsSelfieURL} alt="dogs-taking-selfie"/>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Spash;
