import React from 'react';
import '../css/header.css';

export default class Header extends React.Component {
    render() {
        return (

            <div className="flex-container">
                <div className="flex-item1"> <div className="name">The Hangman</div> </div>
                    <div className="login">
                        <span>Login</span>
                    </div>
            </div>
        );
    }
}