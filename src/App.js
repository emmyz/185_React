import "./App.css";
import { Component } from "react";
import Tablist from "./component/tablist";
import Body from "./component/body";

class App extends Component {
  constructor() {
    super();

    // default state
    this.state = {
      active: 1,
    };
    // pass in id to change state
    this.changeTab = (id) => {
      this.setState({
        active: id,
      });
    };
  }
  // render App -> Tablist_Componenet -> Body_Component
  render() {
    const tabs = [
      {
        id: 1,
        title: "Text",
      },
      {
        id: 2,
        title: "Image",
      },
      {
        id: 3,
        title: "Video",
      },
      {
        id: 4,
        title: "Table",
      },
      {
        id: 5,
        title: "Email",
      },
    ];
    return (
      <div className="App">
        {/* nav-bar stays with different active tab */}
        <div className="nav_bar">
          {/* giving props to child element */}
          <Tablist
            tabs={tabs}
            activeTab={this.state.active}
            ctab={this.changeTab}
          />
        </div>
        {/* body content change according to tab */}
        <div className="body">
          <Body activeTab={this.state.active} />
        </div>
      </div>
    );
  }
}

export default App;
