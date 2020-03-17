import React from "react";

const ResultCard = props => {
  const { username } = props.user;

  return <div>{username}</div>;
};

export default ResultCard;
