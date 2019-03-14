import React, { Component } from 'react';
import InfoUser from "../../Components/InfoUser/InfoUser";
import Pictures from "../../Components/Pictures/Pictures";

// const users = [{
//     id: 1,
//     prenom: "Tanneguy",
//     nom: "LEVEQUE",
//     naissance: "11/06/1996",
// }, {
//     id: 2,
//     prenom: "Francois",
//     nom: "LEVEQUE",
//     naissance: "12/04/1994",

// }, {
//     id: 3,
//     prenom: "Camille",
//     nom: "LEVEQUE",
//     naissance: "10/01/1991",

// }];



class Profils extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                prenom: "ok",
                nom: "LEVEQUE",
                naissance: "11/06/1996",
            }
        };

        this.displayTan = this.displayTan.bind(this);
    }


    displayTan() {
        this.setState({
            user: {
                id: 2,
                prenom: "lascar",
                nom: "EnBar",
                naissance: "30/06/1990",
            }
        })  

    }

    render() {
        return (
            <div>
                                       
                {<button type="button" onClick={() => {this.displayTan()} }> TAN </button>}

                {<InfoUser user={this.state.user}/> }

            </div>
        );
    }
}






export default Profils;