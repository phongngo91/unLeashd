import React from "react";

// TODO add a link to the PetStoreIndex
// and a link to he PetBreedIndex inside this NavBar
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleHistory(location) {
    () => this.props.history.push(location);
  }

  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <nav className="nav-bar-container">
          <ul>
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

export default NavBar;
