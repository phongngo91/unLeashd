import React from "react";
import CheckinItemCard from "../checkin/checkin_item_card";

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const { checkins, showedUser } = this.props;
    let usersName = null;
    let myCheckins = [];

    if (showedUser) {
      showedUser.checkin_ids.forEach(id => {
        if (checkins[id]) {
          myCheckins.push(checkins[id]);
        }
      });
      usersName = <span>{showedUser.first_name}'s</span>;
    }

    let checkinCards = null;
    if (myCheckins.length > 0) {
      checkinCards = myCheckins.reverse().map((checkin, idx) => (
        <CheckinItemCard
          checkin={checkin}
          key={idx}
          currentUser={showedUser}
          // deleteCheckin={deleteCheckin}
        />
      ));
    }

    return (
      <div className="park-container">
        <h1>USER BANNER</h1>
        <div className="park-content">
          <div className="global-checkins-container">
            <div className="global-checkins">
              <ul>
                <h3 className="recent-feed-header">
                  {usersName} Recent Activity
                </h3>
                {checkinCards}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersShow;
