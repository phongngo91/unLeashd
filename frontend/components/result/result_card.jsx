import React from "react";

const ResultCard = props => {
  const { username, image_url } = props.user;

  return (
    <div className="result-container">
      <div className="result-wrapper">
        <div className="profile-img-wrapper">
          <img src={image_url} alt="profile-image" className="img-prof"/>
        </div>
        <div className="profile-info-wrapper">
          <div>{username}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
