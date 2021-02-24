import React, { Component } from "react";
import "../App.css";

class Email extends Component {
  render() {
    var validateEmail = () => {
      var email_addr = document.getElementById("email").value;
      var msg = document.getElementById("message");
      var valid_msg = "Email succesfully recorded.";
      var invalid_msg = "Invalid email address.";
      if (
        email_addr.includes("@") &&
        (email_addr.slice(-4) === ".com" || email_addr.slice(-4) === ".edu")
      ) {
        msg.innerHTML = valid_msg;
      } else {
        msg.innerHTML = invalid_msg;
      }
    };
    return (
      <div id="form_container">
        <br></br>
        <form>
          <label for="email">Email:</label>
          <br />
          <input type="text" id="email" name="email" />
          <h6 id="message"> </h6>

          <button type="button" onClick={() => validateEmail()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Email;
