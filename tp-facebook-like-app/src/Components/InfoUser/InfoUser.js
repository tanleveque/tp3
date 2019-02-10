import React, { Component } from 'react';

class InfoUser extends Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                <p>{user.prenom}</p>
                <p>{user.nom}</p>
                <p>{user.naissance}</p>
            </div>
        );
    }
}

export default InfoUser;