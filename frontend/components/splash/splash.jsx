import React from "react";

class Spash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="splash-container">
                <ul>
                    <button href="/login" className="login-button">Sign In</button>
                    <button href="/signup" className="signup-button">Create An Account</button>
                </ul>
            </nav>
        )
    }
}

export default Spash;
