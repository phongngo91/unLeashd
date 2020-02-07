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
                <ul className="splash-login-container">
                    <button 
                        onClick={this.handleLoginClick} 
                        className="login-button">Sign In
                    </button>
                    <button 
                        onClick={this.handleSignupClick}
                        className="signup-button">Create An Account
                    </button>
                </ul>
                <div className="unleashd-logo">unLeashd</div>
                <div className="unleashd-logo-sub">Pet Gently</div>
                <h4 className="unleashd-description">Discover and share your favorite dogs.</h4>
            </nav>
        )
    }
}

export default Spash;
