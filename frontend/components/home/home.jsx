import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <>
        <h3>Home Components Will Go Here</h3>
      </>
    );
  }
}

export default Home;
