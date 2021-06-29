import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodoList from './AddTodoList'; //Adding Component 
import TodoList from './TodoList';//MyList Container


function App() {

  /////State/////////////////
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

/////////////Use Effect/////////////////
      useEffect(() => {
         filterHandler();
    }, [todos, status]);

    function filterHandler(){
      switch(status) {
        case 'completed' :
          setfilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted' :  
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default: setfilteredTodos(todos);
            break;
      };
  };

  return (
    <div className="App">
      <header >
        Note - Todo List 
      </header>
      <AddTodoList 
          inputText={inputText}
          todos={todos} 
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
      />

      <TodoList 
          setTodos={setTodos} 
          todos={todos} 
          filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
