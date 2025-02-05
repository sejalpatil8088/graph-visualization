import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNode } from "../redux/graphSlice";
import { RootState } from "../redux/store";

const Color = () => {
  const dispatch = useDispatch();
  const node = useSelector((state: RootState) => state.graph.find(n => n.id === "node-1"));


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!node) return;
    dispatch(updateNode({ 
      id: "node-1", 
      position: node.position, 
      data: { ...node.data, color: event.target.value } 
    }));
  };
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!node) return;
//     dispatch(updateNode({ id: "node-1", data: { ...node.data, color: event.target.value } }));
//   };

  return (
    <input type="color" onChange={handleChange} />
  );
};

export default Color;



