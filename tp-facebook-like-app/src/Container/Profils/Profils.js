import React, { Component } from 'react';
import InfoUser from "../../Components/InfoUser/InfoUser";
import Pictures from "../../Components/Pictures/Pictures";

class Profils extends Component {
    render() {

        const { profilsData } = this.props;

        return (
            <div>
                <InfoUser user={profilsData} />
            </div>
        );
    }
}

export default Profils;