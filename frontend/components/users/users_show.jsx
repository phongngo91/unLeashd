import React from "react";

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const currentUser = this.props.currentUser;
    const showedUser = this.props.showedUser;

    if (currentUser && showedUser) {
      return (
        <nav className="nav-bar-container">
          <ul>
          <li>Logged in user is {currentUser.username}</li>
          <li>This is {showedUser.username}'s show page</li>
          </ul>
        </nav>
      );
    } else return null;
  }
}

export default UsersShow;