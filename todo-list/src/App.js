import React from 'react'
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {

  const todoList = useSelector(selectTodoList)
  console.log(todoList)
  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {
            todoList.map(item => (
              <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
