import { createSlice, nanoid } from "@reduxjs/toolkit";

/* Task type */
interface Task {
  id: string;
  data: string;
  completed: boolean;
}

/* State type */
interface StateDataType {
  items: Task[];
  filters: string;
}

const initialState: StateDataType = {
  items: [],
  filters: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (data: string) => ({
        payload: {
          id: nanoid(),
          data,
          completed: false,
        },
      }),
    },

    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },

    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});


export const { addTask, toggleTask, deleteTask, setFilters } = taskSlice.actions;
export default taskSlice.reducer;
