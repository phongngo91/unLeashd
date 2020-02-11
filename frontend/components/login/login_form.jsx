import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  loginDemo(e){
    e.preventDefault();
    const demoUser = {
      username: "demo_user",
      password: "hunter2"
    };
    this.props.processForm(demoUser).then(() => this.props.history.push("/home"));
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
      return (<li className="error" key={idx}>{error}</li>)
    });

    let errorsContainer = null;
    if (errorsEl.length > 0){
      errorsContainer = (
        <div className="login-error">{errorsEl}</div>
      )
    }

    return (
      <div
        className="login-content"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
        url(${window.dogsRunningURL})`
        }}
      >
        <div className="login-container phong">
          <div className="login-header">unleashd</div>
          <div className="login-subheader">pet gently</div>
          {errorsContainer}
          <div className="demo-user-container">
            <button onClick={this.loginDemo} className="demo-user-btn">Login with GUEST</button>
          </div>
          <div className="or">Or</div>
          <form className="login-form " onSubmit={this.handleSubmit}>
            <div
              className="input-container"
              style={{
                backgroundImage: `url(${window.userIconURL})`
              }}
            >
              <input
                className="input"
                onChange={this.update("username")}
                type="text"
                value={this.state.username}
                placeholder="Username"
              />
            </div>
            <div
              className="input-container"
              style={{
                backgroundImage: `url(${window.passwordIconURL})`
              }}
            >
              <input
                className="input"
                onChange={this.update("password")}
                type="password"
                value={this.state.password}
                placeholder="Password"
              />
            </div>
            <div className="login-submit-container">
              <button className="login-submit-button">
                {this.props.formType}
              </button>
            </div>
          </form>
          <div className="login-container-bottom">
            New around here? <Link to="/signup">Sign up!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
