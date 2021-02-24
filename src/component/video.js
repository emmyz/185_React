import React, { Component } from "react";
import v1 from "./videos/v1.mp4";
import v2 from "./videos/v2.mp4";
import v3 from "./videos/v3.mp4";
import v4 from "./videos/v4.mp4";
import "../App.css";

class Video extends Component {
  olVideos(a) {
    //display overlay and item div onlick
    var ol = document.getElementById("overlay");
    ol.style.display = "block";
    var ol_vid = document.getElementById("ol_video");
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
      <div className="vid_container">
        <div>
          <video className="vid_item" onClick={this.olVideos} src={v1}></video>
        </div>
        <div>
          <video className="vid_item" onClick={this.olVideos} src={v2}></video>
        </div>
        <div>
          <video className="vid_item" onClick={this.olVideos} src={v3}></video>
        </div>
        <div>
          <video className="vid_item" onClick={this.olVideos} src={v4}></video>
        </div>

        <div className="overlay" id="overlay">
          <video className="ol_item" id="ol_video" controls></video>
        </div>
      </div>
    );
  }
}

export default Video;
