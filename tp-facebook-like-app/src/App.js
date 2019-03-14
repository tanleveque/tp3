import React, { Component } from "react";
import Profils from "./Container/Profils/Profils";


class App extends Component {

  render() {

    return (
      <div>
        <div className="App">
          <h2> Facebook </h2>
        </div>

        <div>
          <Profils/>
        </div>
      </div>

    );
  }
}

export default App;
