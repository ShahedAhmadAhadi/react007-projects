import React from 'react'
import Input from './components/Input';
import './App.css';
import TodoItem from './components/todoItem';

function App() {
  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {
            todoList.map(item => {
              <TodoItem name={item.item} done={item.done} id={item.id} />
            })
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
