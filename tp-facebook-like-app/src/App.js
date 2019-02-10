import React,{ Component } from "react";
import Profils from "./Container/Profils/Profils";

const users = [{
  prenom : "Tanneguy", 
  nom : "LEVEQUE",
  naissance : "11/06/1996",
}, {
  prenom : "Francois", 
  nom : "LEVEQUE",
  naissance : "12/04/1994",
}, {
  prenom : "Camille", 
  nom : "LEVEQUE",
  naissance : "10/01/1991",
}];

const listItems = Object.keys(users).map((user,i) =>
  <div key={users[user]}>{user}{i}</div>
);

class App extends Component {

  render (){

    return (
      <div className="App">
        <h2> Facebook </h2>
          <ul>
          {listItems}
          </ul>        
      </div>

    );
  }
}

export default App;
