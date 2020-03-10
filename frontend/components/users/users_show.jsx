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
    const { checkins, showedUser, currentUser } = this.props;
    let usersName = null;
    let profileCard = null;
    let myCheckins = [];
    let addFriendBtn = null;
    if (showedUser){
      if (showedUser.friend_ids.includes(currentUser.id)) {
        addFriendBtn = <div className="add-friend-btn moreDogBtn remove-blue">REMOVE FRIEND</div>;
      } else {
        addFriendBtn = <div className="add-friend-btn moreDogBtn remove-blue">ADD FRIEND</div>;
      }
    }

    if (showedUser && showedUser.checkin_ids) {
      showedUser.checkin_ids.forEach(id => {
        if (checkins[id]) {
          myCheckins.push(checkins[id]);
        }
      });
      usersName = <span>{showedUser.first_name}'s</span>;

      profileCard = (
        <div className="profile-container">
          <div className="img-container-prof">
            <img
              src={showedUser.image_url}
              alt="profile-pic"
              className="user-prof-ava"
            />
            <div className="push-down">
              <div className="white-text make-big">
                {showedUser.first_name} {showedUser.last_name}
              </div>
              <div className="white-text">{showedUser.username}</div>
            </div>
          </div>
          {addFriendBtn}
        </div>
      );
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
        <div className="banner-container">{profileCard}</div>
        <div className="park-content">
          <div className="global-checkins-container">
            <div className="global-checkins">
              <ul className="make-width-760">
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
