import React from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Graph = () => {
  const nodes = useSelector((state: RootState) => state.graph);

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Graph;