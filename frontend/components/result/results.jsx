import React from "react";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = this.props.users;
    let result = null;
    if (users.length === 0) {
      result = <div className="result-page">No Users Found</div>;
    } else {
      debugger
      const resultElements = users.map(user => {
        return <div>{user.username}</div>;
      });
      result = <div className="result-page">{resultElements}</div>;
    }
    return result;
  }
}

export default SearchResult;
