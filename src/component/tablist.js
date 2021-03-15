import React, { Component } from "react";
import Tab from "./indtab";

class Tablist extends Component {
  render() {
    console.log("id is " + this.props.activeTab);
    // display each tab with individual tab (itab)
    return this.props.tabs.map((tab) => (
      <Tab
        key={tab.id}
        out={tab}
        activetab={this.props.activeTab}
        ctab={this.props.ctab}
      />
    ));
  }
}

export default Tablist;
