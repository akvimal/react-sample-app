import { useSelector,useDispatch } from 'react-redux';
import { addTodo, fetchTodos, updateTodo, removeTodo } from '../redux/index';
import { useEffect, useState } from 'react';

const Todos = () => {

    const [todo, setTodo] = useState({title:''});
    const dispatch = useDispatch();
    const todos = useSelector(state => state.items);
    const refresh = useSelector(state => state.changed);
  
    const [dataCopy, setDataCopy] = useState([]);
  
    useEffect(()=>{
      dispatch(fetchTodos());
    },[refresh]);
  
    useEffect(()=>{
      setDataCopy(todos.map( e => {return {...e, edit:false, remove:false}}));
    },[todos])

    
    return <div>

<input type="text" value={todo.title} onChange={(e)=>setTodo({title:e.target.value})}/>
      
      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
      
        { dataCopy.map(todo => <div key={todo.id}>
          { !todo.edit && !todo.remove && <p>{todo.title} <button onClick={()=>{
            const copy = [...dataCopy];
            copy.forEach(e => e.edit = e.id === todo.id);
            setDataCopy(copy);
          }}>Edit</button>
          <button onClick={()=>{
            dispatch(removeTodo(todo.id));
          }}>Remove</button></p>}
        {todo.edit && <input type="text" value={todo.title} id={todo.id} autoFocus
          onBlur={(e)=>{
            const altered = dataCopy.filter(d => d.id === e.target.id)
            dispatch(updateTodo(altered));
          }} 
          onChange={(e)=>{
          const copy = [...dataCopy];
            copy.forEach(i => {
              if(i.id === e.target.id){
                i.title = e.target.value;
              }
            });
            setDataCopy(copy);
        }}/>}</div>)}

    </div>
}

export default Todos;