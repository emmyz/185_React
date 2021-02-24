import React from "react";

// function based component

function Tab(props) {
  const addstyle = () => {
    // out = each tab, each tab's id = activetab(id)
    if (props.out.id === props.activetab) {
      return { backgroundColor: "#303631" };
    } else {
      return { backgroundColor: "#0a0b0a" };
    }
  };

  return (
    // bind onclick change tab id to individual tab
    <div
      className="nav_item"
      style={addstyle()}
      onClick={props.ctab.bind(this, props.out.id)}
    >
      {props.out.title}
    </div>
  );
}

export default Tab;
