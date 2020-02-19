import React from "react";
import { Link } from "react-router-dom";

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
    this.getCheckins();
  }

  render() {
    let checkins = null;
    if (this.props.checkins.length > 0) {
      checkins = this.props.checkins.reverse().map((checkin, idx) => {
        let checkinImage = null;
        let checkinBody = null;
        if (checkin.image_url) {
          checkinImage = (
            <div className="checkin-img-container">
              <img
                className="checkin-img"
                src={checkin.image_url}
                alt="checkin-image"
              />
            </div>
          );
        }
        if (checkin.checkin_body.length > 0) {
          checkinBody = (
            <div className="checkin-body-container">
              <div className="checkin-body-text">{checkin.checkin_body}</div>
            </div>
          );
        }

        return (
          <div key={idx} className="checkin-card">
            <div className="checkin-user-info">
              <span>
                <span>
                  <Link to={`users/${checkin.author_id}`} className="dog-name">
                    {checkin.author.first_name} {checkin.author.last_name}
                  </Link>
                </span>{" "}
                is petting a{" "}
                <Link to={`dogs/${checkin.dog_breed_id}`} className="dog-name">
                  {checkin.dog_breed.breed_name}
                </Link>{" "}
                at{" "}
                <Link
                  to={`/petshops/${checkin.pet_shop_id}`}
                  className="dog-name"
                >
                  {checkin.pet_shop}
                </Link>
              </span>
            </div>
            {checkinBody}
            <div>{checkinImage}</div>
          </div>
        );
      });
    }

    let moreButton = null;
    if (this.props.errors.includes("No More Checkins")){
      moreButton = (<div className="center-me">
      <span>No More Checkins</span>
      </div>)
    } else {
      moreButton = (
        <div className="moreDog">
        <button
          onClick={this.getCheckins}
          className="moreDogBtn remove-blue"
        >
          See More
        </button>
      </div>
      )
    }

    const { first_name, last_name, username } = this.props.currentUser;
    return (
      <div className="home-container">
        <div className="user-home-content">
          <div className="user-left-feed">
            <div className="global-checkins">
              <ul>
                <h3 className="recent-feed-header">Recent Activities Feed</h3>
                {checkins}
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
