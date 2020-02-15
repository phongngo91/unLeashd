import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    const { first_name, last_name, username } = this.props.currentUser;
    return (
      <div className="home-container">
        <div className="user-home-content">
          <div className="user-left-feed">
            <div className="sample-global-checkins"></div>
          </div>
          <div className="user-right-feed">
            <div className="user-profile">
              <div>
                {first_name}
                {last_name}
              </div>
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
