import React, { Component } from 'react';
import "./InfoUser.css";

class InfoUser extends Component {
    render() {

        const { user } = this.props;

        return (
            <div className="InfoUser-container">
                <p>{user.id}</p>
                <p>{user.prenom}</p>
                <p>{user.nom}</p>
                <p>{user.naissance}</p>
                
            </div>
        );
    }
}

export default InfoUser;