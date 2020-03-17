import React from "react";

const ResultCard = props => {
  const { id, username, image_url, first_name, last_name } = props.user;

  return (
    <div className="result-container">
      <div className="result-wrapper">
        <div className="profile-img-wrapper">
          <img src={image_url} alt="profile-image" className="img-prof" />
        </div>
        <div className="profile-info-wrapper">
          <div>
            <span>
              <a href={`/#/users/${id}`}>
                {username}
              </a>
            </span>
          </div>
          <div>
            {first_name} {last_name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
