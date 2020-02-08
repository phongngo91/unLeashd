import React from "react";

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleHistory(location) {
    () => this.props.history.push(location);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    const currentUser = this.props.currentUser;
    debugger
    if (loggedInUser && currentUser) {
      return (
        <nav className="nav-bar-container">
          <ul>
          <li>Logged in user is {loggedInUser.username}</li>
          <li>Current User's Page is {currentUser.username}</li>
            <li>
              <a href="/#/petstores">Pet Stores</a>
            </li>
          </ul>
          <ul className="nav-bar-controls">
            <button onClick={this.props.logout}>Log Out</button>
          </ul>
        </nav>
      );
    } else return null;
  }
}

export default UsersShow;