import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  tasks: [],
  completedTask: [],
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    updateTaskArray: (state, action) => {
      const {tasks} = action.payload;
      state.tasks = tasks;
    },
  },
});
export const {updateTaskArray} = taskSlice.actions;
export default taskSlice;
