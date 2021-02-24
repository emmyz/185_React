import React, { Component } from "react";
import "../App.css";
import i1 from "./images/i1.jpeg";
import i2 from "./images/i2.jpeg";
import i3 from "./images/i3.jpeg";
import i4 from "./images/i4.jpeg";
import i5 from "./images/i5.jpeg";
import i6 from "./images/i6.jpeg";
import i7 from "./images/i7.jpeg";
import i8 from "./images/i8.jpeg";
import i9 from "./images/i9.jpeg";
import i10 from "./images/i10.jpeg";
import i11 from "./images/i11.jpeg";
import i12 from "./images/i12.jpeg";
import i13 from "./images/i13.jpeg";
import i14 from "./images/i14.jpeg";
import i15 from "./images/i15.jpeg";
import i16 from "./images/i16.jpeg";
import i17 from "./images/i17.jpeg";
import i18 from "./images/i18.jpeg";
import i19 from "./images/i19.jpeg";
import i20 from "./images/i20.jpeg";
import i21 from "./images/i21.jpeg";
import i22 from "./images/i22.jpeg";
import i23 from "./images/i23.jpeg";
import i24 from "./images/i24.jpeg";
import i25 from "./images/i25.jpeg";
import i26 from "./images/i26.jpeg";

class Image extends Component {
  //back to top button
  //window listen for scroll over quarter and display
  componentDidMount() {
    window.addEventListener("scroll", this.displayButton);
    console.log("in scroll");
  }

  displayButton() {
    console.log("in display");
    var bttButton = document.getElementById("btt_btn");
    if (
      document.body.scrollTop > document.body.scrollHeight / 4 ||
      document.documentElement.scrollTop > document.body.scrollHeight / 4
    ) {
      bttButton.style.display = "block";
    } else {
      bttButton.style.display = "none";
    }
  }

  backFunction() {
    window.scroll(0, 0);
  }

  olImages(a) {
    //display overlay and item div onlick
    var ol = document.getElementById("overlay");
    ol.style.display = "block";
    var ol_vid = document.getElementById("ol_image");
    ol_vid.src = a.target.src;
    //click overlay again to exit to none overlay
    ol.addEventListener("click", function (event) {
      if (event.target === this) {
        ol.style.display = "none";
      }
    });
  }
  render() {
    return (
      <div>
        <button id="btt_btn" onClick={this.backFunction}>
          Back To Top
        </button>

        <div className="img_container">
          <img className="img_item" onClick={this.olImages} src={i1} alt="" />
          <img className="img_item" onClick={this.olImages} src={i2} alt="" />
          <img className="img_item" onClick={this.olImages} src={i3} alt="" />
          <img className="img_item" onClick={this.olImages} src={i4} alt="" />
          <img className="img_item" onClick={this.olImages} src={i5} alt="" />
          <img className="img_item" onClick={this.olImages} src={i6} alt="" />
          <img className="img_item" onClick={this.olImages} src={i7} alt="" />
          <img className="img_item" onClick={this.olImages} src={i8} alt="" />
          <img className="img_item" onClick={this.olImages} src={i9} alt="" />
          <img className="img_item" onClick={this.olImages} src={i10} alt="" />
          <img className="img_item" onClick={this.olImages} src={i11} alt="" />
          <img className="img_item" onClick={this.olImages} src={i12} alt="" />
          <img className="img_item" onClick={this.olImages} src={i13} alt="" />
          <img className="img_item" onClick={this.olImages} src={i14} alt="" />
          <img className="img_item" onClick={this.olImages} src={i15} alt="" />
          <img className="img_item" onClick={this.olImages} src={i16} alt="" />
          <img className="img_item" onClick={this.olImages} src={i17} alt="" />
          <img className="img_item" onClick={this.olImages} src={i18} alt="" />
          <img className="img_item" onClick={this.olImages} src={i19} alt="" />
          <img className="img_item" onClick={this.olImages} src={i20} alt="" />
          <img className="img_item" onClick={this.olImages} src={i21} alt="" />
          <img className="img_item" onClick={this.olImages} src={i22} alt="" />
          <img className="img_item" onClick={this.olImages} src={i23} alt="" />
          <img className="img_item" onClick={this.olImages} src={i24} alt="" />
          <img className="img_item" onClick={this.olImages} src={i25} alt="" />
          <img className="img_item" onClick={this.olImages} src={i26} alt="" />
          <div className="overlay" id="overlay">
            <img className="ol_item" id="ol_image" alt="" controls></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
