import React, { Component } from "react";
import "../App.css";

class Text extends Component {
  render() {
    return (
      <div id="form_container">
        <br></br>
        <form>
          <label for="first">First name:</label>
          <br></br>
          <input type="text" id="first" />
          <br></br>
          <label for="last">Last name:</label>
          <br></br>
          <input type="text" id="last" />
          <p>
            <p>Favorite Food</p>
            <input type="radio" id="food1" />
            <label for="food1">Pizza</label>
            <br></br>
            <input type="radio" id="food2" />
            <label for="food2">Ice Cream</label>
            <br></br>
            <input type="radio" id="food3" />
            <label for="food3">Burger</label>
          </p>

          <button>Done</button>
        </form>
      </div>
    );
  }
}

export default Text;
