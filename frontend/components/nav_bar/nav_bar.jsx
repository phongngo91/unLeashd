import React from "react";

// TODO add a link to the PetStoreIndex
// and a link to he PetBreedIndex inside this NavBar
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    // debugger
    if (loggedInUser) {
      return (
        <nav className="nav-bar-container">
          <ul>
            <li>
              {/* <a href="/#/petstores">Pet Stores</a> */}
              Pet Stores
            </li>
          </ul>
          <ul className="nav-bar-controls">
            <button onClick={this.props.logout}>Log Out</button>
          </ul>
        </nav>
      );
    } else if (this.props.match.path === "/"){
      // we hide the nav bar if we are on the splash page
      // debugger
      return null;
    } else {
      // when the user is not logged in, we still want to show the nav bar,
      // but it will be the nav bar with the login button on it
      return (<div>Place holder for nav bar, with no signed in user</div>);
    }
  }
}

export default NavBar;
