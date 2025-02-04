import React from "react";
import Color from "./Color";
import FontSizeControl from "./FontSizeControl";

const NodeCustomizationPanel = () => {
  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <h3>Customize Node</h3>
      <Color />
      <FontSizeControl />
    </div>
  );
};

export default NodeCustomizationPanel;
