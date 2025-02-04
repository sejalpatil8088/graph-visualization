import React from "react";
import { useDispatch } from "react-redux";
import { undo, redo } from "../redux/historySlice";

const UndoRedoControls = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => dispatch(undo())}>Undo</button>
      <button onClick={() => dispatch(redo())}>Redo</button>
    </div>
  );
};

export default UndoRedoControls;
