
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNode } from "../redux/graphSlice";
import { RootState } from "../redux/store";

const FontSizeControl = () => {
  const dispatch = useDispatch();
  const node = useSelector((state: RootState) => state.graph.find(n => n.id === "node-1"));


const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!node) return;
    dispatch(updateNode({ 
      id: "node-1", 
      position: node.position, 
      data: { ...node.data, fontSize: parseInt(event.target.value) } 
    }));
  };
  
  return (
    <div>
      <label>Font Size:</label>
      <input type="range" min="12" max="24" step="1" onChange={handleFontSizeChange} />
    </div>
  );
};

export default FontSizeControl;



