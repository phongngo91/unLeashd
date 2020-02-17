import React from "react";
import { Redirect } from "react-router-dom";

class CreateCheckinForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser === undefined) {
      return <Redirect to="/login" />;
    }

    if (this.props.dog === undefined) {
      return <Redirect to="/dogs" />;
    }

    return (
      <div className="checkin-container">
        <div className="checkin-header">
          <div className="checkin-text">Check-in</div>
          <div
            className="x-button"
            style={{
              backgroundImage: `url(${window.whitex})`
            }}
            onClick={() => this.props.closeModal()}
          ></div>
        </div>
      </div>
    );
  }
}

export default CreateCheckinForm;
