import React from "react";
import { Link } from "react-router-dom";
import CheckinItemCard from "../checkin/checkin_item_card";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.getCheckins = this.getCheckins.bind(this);
  }

  getCheckins() {
    this.props.fetchCheckins(this.state.page);
    this.setState = { page: (this.state.page += 1) };
  }

  componentDidMount() {
    this.props.clearCheckins();
    this.getCheckins();
  }

  render() {

    const { checkins, currentUser, errors, deleteCheckin } = this.props;

    let checkinCards = null;

    if (Object.values(checkins).length > 0) {
      checkinCards = Object.values(checkins)
        .reverse()
        .map((checkin, idx) => (
          <CheckinItemCard
            checkin={checkin}
            key={idx}
            currentUser={currentUser}
            deleteCheckin={deleteCheckin}
          />
        ));
    }

    let moreButton = null;
    if (errors.includes("No More Checkins")) {
      moreButton = (
        <div className="center-me">
          <span>No More Checkins</span>
        </div>
      );
    } else {
      moreButton = (
        <div className="moreDog">
          <button onClick={this.getCheckins} className="moreDogBtn remove-blue">
            See More
          </button>
        </div>
      );
    }

    const { first_name, last_name, username } = currentUser;
    return (
      <div className="home-container">
        <div className="user-home-content">
          <div className="user-left-feed">
            <div className="global-checkins">
              <ul>
                <h3 className="recent-feed-header">Recent Activities Feed</h3>
                {checkinCards}
                {moreButton}
              </ul>
            </div>
          </div>
          <div className="user-right-feed">
            <div className="user-profile">
              <span className="user-name">
                {first_name} {last_name}{" "}
              </span>
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
