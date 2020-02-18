import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      password_check: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    if (this.state.password_check !== this.state.password) {
      this.props.receiveErrors(["Passwords do not match"]);
    } else {
      this.props.processForm(user).then(() => this.props.history.push("/home"));
    }
  }

  render() {
    const errorsEl = this.props.errors.session.map((error, idx) => {
      return (
        <li className="error" key={idx}>
          {error}
        </li>
      );
    });

    let errorsContainer = null;
    if (errorsEl.length > 0) {
      errorsContainer = <div className="login-error">{errorsEl}</div>;
    }

    return (
      <div className="signup-content">
        <div className="signup-container">
          <div className="signup-header">unleashd</div>
          <div className="signup-subheader">pet gently</div>
          {errorsContainer}
          <form className="signup-form " onSubmit={this.handleSubmit}>
            <div className="field-instructions-form">
              All fields below are required unless specified.
            </div>
            <div className="signup-row">
              <div
                className="signup-input-container"
                style={{
                  backgroundImage: `url(${window.userIconURL})`
                }}
              >
                <input
                  className="signup-input"
                  onChange={this.update("username")}
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                />
              </div>
              <div
                className="signup-input-container"
                style={{
                  backgroundImage: `url(${window.emailIconURL})`
                }}
              >
                <input
                  className="signup-input"
                  onChange={this.update("email")}
                  type="email"
                  value={this.state.email}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="field-instructions-password">
              Avoid using common words and include a mix of letters and numbers.
            </div>
            <div className="signup-row">
              <div
                className="signup-input-container"
                style={{
                  backgroundImage: `url(${window.passwordIconURL})`
                }}
              >
                <input
                  className="signup-input"
                  onChange={this.update("password")}
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                />
              </div>
              <div
                className="signup-input-container"
                style={{
                  backgroundImage: `url(${window.passwordIconURL})`
                }}
              >
                <input
                  className="signup-input"
                  type="password"
                  onChange={this.update("password_check")}
                  value={this.state.password_check}
                  placeholder="Repeat Password"
                />
              </div>
            </div>
            <div className="signup-row">
              <div className="name-container">
                <input
                  className="name-input"
                  onChange={this.update("first_name")}
                  type="text"
                  value={this.state.first_name}
                  placeholder="First Name"
                />
              </div>
              <div className="name-container">
                <input
                  className="name-input"
                  onChange={this.update("last_name")}
                  type="text"
                  value={this.state.last_name}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="signup-submit-container">
              <button className="signup-submit-button">
                {this.props.formType}
              </button>
            </div>
          </form>
          <div className="signup-container-bottom">
            Already have an account? <Link to="/login">Log in!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
