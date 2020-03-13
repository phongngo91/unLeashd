import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);

    this.state = {
      searchString: ""
    };

    this.searchUsers = this.searchUsers.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  updateSearch(){
    return e => this.setState({
      searchString: e.target.value
    });
  }

  searchUsers(){
    let name = this.state.searchString.split(" ");
    const first_name = name[0];
    const last_name = name[1] === undefined ? "" : name[1];
    this.props.searchUsers({
      first_name,
      last_name
    }).then(()=>{
      this.setState({
        searchString: ""
      });
    });
    // REDIRECT TO RESULTS PAGE HERE
  }

  handleLoginClick() {
    this.props.history.push("/login");
  }

  handleSignupClick() {
    this.props.history.push("/signup");
  }

  keyPressed(event) {
    if (event.key === "Enter"){
      this.searchUsers();
    }
  }

  render() {
    let searchInput = null;
    searchInput = (
      <div className="search-user-container">
        <input
          onChange={this.updateSearch()}
          type="text"
          onKeyPress={this.keyPressed}
          value={this.state.searchString}
          className="search-user remove-blue"
          placeholder="Search User"
        ></input>
        <button 
          className="search-user-btn remove-blue"
          onClick={this.searchUsers}>Search</button>
      </div>
    );

    const loggedInUser = this.props.loggedInUser;
    let profImg = window.defaultAva;
    if (loggedInUser) {
      if (loggedInUser.image_url) {
        profImg = loggedInUser.image_url;
      }

      return (
        <nav className="nav-bar-container sticky">
          <div className="nav-left-content">
            <Link to="/">
              <div className="nav-logo">
                <div className="unleashd-nav">unLeashd</div>
                <div className="unleashd-desc">pet gently</div>
              </div>
            </Link>
            <div>
              <a className="nav-link" href="/#/thepark">
                The Park
              </a>
            </div>
            <div>
              <a className="nav-link" href="/#/petshops">
                Pet Shops
              </a>
            </div>
            <div>
              <a className="nav-link" href="/#/dogs">
                Dogs
              </a>
            </div>
          </div>
          {searchInput}
          <ul
            className="user-controls"
            style={{
              backgroundImage: `url(${profImg})`
            }}
          >
            <div className="arrow-up"></div>
            <div className="nav-user-desktop">
              <ul className="control-list">
                <li
                  className="new-pet-nav drop-down-el"
                  onClick={() => {
                    this.props.history.push("/dogs/new");
                  }}
                >
                  New Dog
                </li>
                <li
                  className="logout-nav drop-down-el"
                  onClick={() =>
                    this.props.logout().then(() => this.props.history.push("/"))
                  }
                >
                  Logout
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      );
    } else if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/login" ||
      this.props.location.pathname === "/signup"
    ) {
      return null;
    } else {
      return (
        <nav className="nav-bar-container sticky">
          <div className="nav-left-content">
            <Link to="/">
              <div className="nav-logo">
                <div className="unleashd-nav">unLeashd</div>
                <div className="unleashd-desc">pet gently</div>
              </div>
            </Link>
            <div>
              <a href="/#/petshops" className="nav-link">
                Pet Shops
              </a>
            </div>
            <div>
              <a className="nav-link" href="/#/dogs">
                Dogs
              </a>
            </div>
          </div>
          {searchInput}
          <ul className="nav-bar-controls">
            <button
              onClick={this.handleLoginClick}
              className="login-nav-btn remove-blue"
            >
              Sign In
            </button>
            <button
              onClick={this.handleSignupClick}
              className="signup-nav-btn remove-blue"
            >
              Join Now
            </button>
          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
