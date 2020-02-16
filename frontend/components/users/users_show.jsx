import React from "react";
import { Link } from "react-router-dom";

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
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

    const currentUser = this.props.currentUser;
    const showedUser = this.props.showedUser;
    let dogsEl = null;
    if (this.props.authored_dogs) {
      dogsEl = this.props.authored_dogs.map((dog, idx) => {
        return (
          <div key={idx} className="user-dogs-card">
            <Link to={`/dogs/${dog.id}`}>
              <img
                src={dog.image_url}
                alt="dog-pic"
                className="user-dogs-icon"
              />
            </Link>
            <div>
              <Link to={`/dogs/${dog.id}`}>
                <div className="dog-name">{dog.breed_name}</div>
              </Link>
              <div className="dog-description">{dog.description}</div>
            </div>
          </div>
        );
      });
    }

    if (currentUser && showedUser) {
      return (
        <nav className="user-home-container">
          <ul>
            <li>Logged in user is {currentUser.username}</li>
            <li>This is {showedUser.username}'s show page</li>
            {/* <img src={this.props.showedUser.image_url} /> */}
            {dogsEl}
          </ul>
        </nav>
      );
    } else if (showedUser) {
      return (
        <nav className="user-home-container">
          <ul>
            <li>This is {showedUser.username}'s show page</li>
            {/* <img src={this.props.showedUser.image_url} /> */}
            {dogsEl}
          </ul>
        </nav>
      );
    } else return <div>{errorsContainer}</div>;
  }
}

export default UsersShow;
