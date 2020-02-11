import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <>
        <h3>Home Components Will Go Here</h3>
        <h1>current user is {currentUser.username}</h1>
      </>
    );
  }
}

export default Home;
