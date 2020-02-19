import React from "react";
import CheckinItemCard from "../checkin/checkin_item_card";

class ThePark extends React.Component {
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
    this.getCheckins();
  }

  render() {
    const { checkins, currentUser, errors } = this.props;

    let checkinCards = null;
    if (checkins.length > 0 && currentUser) {
      checkinCards = checkins
        .reverse()
        .map((checkin, idx) => (
          <CheckinItemCard
            checkin={checkin}
            key={idx}
            currentUser={currentUser}
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

    return (
      <div className="home-container">
        <div className="user-home-content">
          <div className="global-checkins-container">
            <div className="global-checkins">
              <ul>
                <h3 className="recent-feed-header">Recent Global Activity</h3>
                {checkinCards}
                {moreButton}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThePark;
