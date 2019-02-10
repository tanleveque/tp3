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


class App extends Component {

  render (){

    return (
      <div className="App">
        <h2> Facebook </h2>
        {/* {users.map((user,i) =>
          <Profils key={i} profilsData={user}/>  
        )}; */}

        {users.map((user, index) => {
            return <Profils key={index} profilsData={user} />
        })}
        
      </div>

    );
  }
}

export default App;
