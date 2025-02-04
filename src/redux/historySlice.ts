import { createSlice} from "@reduxjs/toolkit";
import { GraphNode } from "../types/types";

interface HistoryState {
  past: GraphNode[][];
  present: GraphNode[];
  future: GraphNode[][];
}

const initialState: HistoryState = {
  past: [],
  present: [],
  future: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    undo: (state) => {
      if (state.past.length > 0) {
        state.future.unshift([...state.present]); 
        state.present = state.past.pop()!; 
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.past.push([...state.present]); 
        state.present = state.future.shift()!; 
      }
    },
  },
});

export const { undo, redo } = historySlice.actions;
export default historySlice.reducer;




// import { createSlice  } from "@reduxjs/toolkit";
// import { HistoryState } from "../types/types";

// const initialState: HistoryState = {
//   past: [],
//   present: [],
//   future: [],
// };

// const historySlice = createSlice({
//   name: "history",
//   initialState,
//   reducers: {
//     undo: (state) => {
//       if (state.past.length > 0) {
//         state.future.unshift([...state.present]);
//         state.present = state.past.pop()!;
//       }
//     },
//     redo: (state) => {
//       if (state.future.length > 0) {
//         state.past.push([...state.present]);
//         state.present = state.future.shift()!;
//       }
//     },
//   },
// });

// export const { undo, redo } = historySlice.actions;
// export default historySlice.reducer;

