import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    if (this.props.checkins.length === 0) {
      return null;
    }
    let checkins = this.props.checkins.reverse().map((checkin, idx) => {
      var checkinImage = null;
      if (checkin.image_url) {
        checkinImage = (<div className="checkin-img-container">
            <img
              className="checkin-img"
              src={checkin.image_url}
              alt="checkin-image"
            />
          </div>);
      }
      return (
        <div key={idx} className="checkin-card">
          <div className="checkin-user-info">
            <span>
              {checkin.author.first_name} {checkin.author.last_name} pet a{" "}
              {checkin.dog_breed.breed_name} at {checkin.pet_shop}
            </span>
          </div>
          <div className="checkin-body-text">{checkin.checkin_body}</div>
          <div>{checkinImage}</div>
        </div>
      );
    });

    const { first_name, last_name, username } = this.props.currentUser;
    return (
      <div className="home-container">
        <div>{process.env.PHONG_RULES}</div>
        <div className="user-home-content">
          <div className="user-left-feed">
            <div className="global-checkins">
              <ul>
                Recent Activities Feed
                {checkins}
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
