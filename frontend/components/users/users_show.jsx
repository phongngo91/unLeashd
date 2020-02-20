import React from "react";

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    return null;
  }
}

export default UsersShow;
