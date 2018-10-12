import React, { Component } from "react";
import Hills from "./Hills";

class App extends Component {
  state = {
    hills: [
      { name: "Green HIll", color: "Green", id: 1 },
      { name: "Gray Hill", color: "Gray", id: 2 },
      { name: "Red Hill", color: "Red", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hill Track</h1>
        <p>Welcome to the hills</p>
        <Hills hills={this.state.hills} />
      </div>
    );
  }
}

export default App;
