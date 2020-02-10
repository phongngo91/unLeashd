import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/home"));
  }

  render() {
    const errorsEl = this.props.errors.session.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });

    let bottomEl = null;
    if (this.props.formType === "Sign In"){
        bottomEl = <>
                    New around here? <Link to="/signup">Sign up!</Link>
                </>
    }

    return (
      <div className="signup-content" 
      style={{ 
        backgroundImage: 
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url(${window.dogsRunning2URL})`
        }}
        >
        <div className="signup-container">
          <div className="signup-header">unleashd</div>
          <div className="signup-subheader">pet gently</div>
          <div className="signup-error">{errorsEl}</div>
          <form className="signup-form "onSubmit={this.handleSubmit}>
            <div>
              <input
                className="input"
                onChange={this.update("username")}
                type="text"
                value={this.state.username}
                placeholder="Username"
              />
            </div>
            <div>
              <input 
                className="input"
                onChange={this.update("email")}
                type="email"
                value={this.state.email}
                placeholder="email"
              />
            </div>
            <div>
              <input 
                className="input"
                onChange={this.update("password")}
                type="password"
                value={this.state.password}
                placeholder="Password"
              />
            </div>
            <div className="login-submit-container">
            <button className="login-submit-button">{this.props.formType}</button>
            </div>
          </form>
          <div className="login-container-bottom">
            {bottomEl}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;


