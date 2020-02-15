import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { first_name, last_name, username } = this.props.currentUser;
    return (
      <div className="home-container">
        <div className="user-home-content">
          <div className="user-left-feed">
            <div className="sample-global-checkins">
              Sample Global Checkins
            </div>
          </div>
          <div className="user-right-feed">
            <div className="user-profile">
              <span className="user-name">{first_name} {last_name} </span>
              <div>{username}</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
