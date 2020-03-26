import React from "react";
import ResultCard from "./result_card";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = this.props.users;
    let result = null;
    if (users.length === 0) {
      result =<div className="no-results-page">
        <div className="no-results-text">No Users Found</div>
        <br/>
        <br/>
        <div className="no-result-explain">Try searching for users by first name, or first name and last name</div>
        </div>
    } else {
      const resultElements = users.map((user, idx) => {
        return <ResultCard key={idx} user={user} />;
      });
      result = <div className="result-page">{resultElements}</div>;
    }
    return result;
  }
}

export default SearchResult;
