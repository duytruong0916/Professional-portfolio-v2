import React from "react";

export default function Tab(props) {
  return (
    <div style={{ display: props.visible ? "inherit" : "none" }}>
      {props.children}
    </div>
  );
}
