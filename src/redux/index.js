import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { items:[], changed:false };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    save(state,action){
      state.items.push(action.payload);
      state.changed = !state.changed;
    },
    update(state,action){
      state.changed = !state.changed;
    },
    delete(state,action){
      state.changed = !state.changed;
    },
    refresh(state,action){
      state.items = action.payload
    },
  }
});

const store = configureStore({
  reducer: todosSlice.reducer
});

export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:4000/todos`);
    dispatch(todosActions.refresh(res.data));
  };
}

export const addTodo = (todo) => {
  return async (dispatch) => {
    const res = await axios.post(`http://localhost:4000/todos`,todo);
    const saved = res.data.saved;
    dispatch(todosActions.save({id:saved._id,title:saved.title}));
  };
}
export const updateTodo = (todos) => {
  const todo = todos[0];
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:4000/todos/${todo.id}`,todo);
    const updated = res.data.updated;
    
    dispatch(todosActions.update());
  };
}

export const removeTodo = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`http://localhost:4000/todos/${id}`);
    const deleted = res.data.deleted;
    
    dispatch(todosActions.delete());
  };
}
export const todosActions = todosSlice.actions;
export default store;