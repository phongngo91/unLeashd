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
      result = <div className="result-page">No Users Found</div>;
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
