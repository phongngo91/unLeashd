import React from "react";

class Spash extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }

    handleLoginClick(){
        this.props.history.push("/login");
    }

    handleSignupClick(){
        this.props.history.push("/signup");
    }

    render() {
        return (
            <nav className="splash-container">
                <ul className="login-container">
                    <button 
                        onClick={this.handleLoginClick} 
                        className="login-button">Sign In
                    </button>
                    <button 
                        onClick={this.handleSignupClick}
                        className="signup-button">Create An Account
                    </button>
                </ul>
                <h1 className="unleashd-logo">unLeashd</h1>
                <h4 className="unleashd-description">Pet and share your favorite dogs.</h4>
            </nav>
        )
    }
}

export default Spash;
