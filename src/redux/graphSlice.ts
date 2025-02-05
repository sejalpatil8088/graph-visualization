import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphNode } from "../types/types";

const initialNodes: GraphNode[] = Array.from({ length: 10 }, (_, i) => ({
  id: `node-${i + 1}`,
  position: { x: Math.random() * 400, y: Math.random() * 400 },
  data: { label: `Node ${i + 1}`, color: "#3498db", fontSize: 16 },
}));

const graphSlice = createSlice({
  name: "graph",
  initialState: initialNodes,
  reducers: {
    updateNode: (state, action: PayloadAction<GraphNode>) => {
      const index = state.findIndex((node) => node.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { updateNode } = graphSlice.actions;
export default graphSlice.reducer;