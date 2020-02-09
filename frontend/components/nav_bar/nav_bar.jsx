import React from "react";

// TODO add a link to the PetStoreIndex
// and a link to he PetBreedIndex inside this NavBar
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
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
    } else return null;
  }
}

export default NavBar;
