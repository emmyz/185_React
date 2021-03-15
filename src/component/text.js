import React, { Component } from "react";
import "../App.css";

class Text extends Component {
  render() {
    return (
      <div id="form_container">
        <br></br>
        <form>
          <label htmlFor="first">First name:</label>
          <br></br>
          <input type="text" id="first" />
          <br></br>
          <label htmlFor="last">Last name:</label>
          <br></br>
          <input type="text" id="last" />
          <div>
            <p>Favorite Food</p>
            <input type="radio" id="food1" />
            <label htmlFor="food1">Pizza</label>
            <br></br>
            <input type="radio" id="food2" />
            <label htmlFor="food2">Ice Cream</label>
            <br></br>
            <input type="radio" id="food3" />
            <label htmlFor="food3">Burger</label>
          </div>
          <br></br>
          <button>Done</button>
        </form>
      </div>
    );
  }
}

export default Text;
