import React from "react";

class CheckinConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="confirmation-container">
          <div className="checkin-header">
            <div className="checkin-text">Confirmation</div>
            <div
              className="x-button"
              style={{
                backgroundImage: `url(${window.whitex})`
              }}
              onClick={() => this.props.closeModal()}
            ></div>
          </div>
          <div className="checkin-text-text">Checkin Completed!</div>
          <div className="confirm-container">
            <div
              className="hover-cursor cfm-btn"
              onClick={() => this.props.closeModal()}
            >
              Continue
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CheckinConfirm;
