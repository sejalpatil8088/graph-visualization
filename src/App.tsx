import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Graph from "./components/Graph";
import NodeCustomizationPanel from "./components/NodeCustomizationPanel";
import UndoRedoControls from "./components/UndoRedoControls";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Graph Visualizer</h1>
        <Graph />
        <NodeCustomizationPanel />
        <UndoRedoControls />
      </div>
    </Provider>
  );
};

export default App;
