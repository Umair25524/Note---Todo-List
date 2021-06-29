import React from 'react';

function Work({text, todo, todos, setTodos, }) {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const compeleteHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed 
                };
            };
            return item ;
        }));
       
    }
    return (
        <div className="work">
            <li className="todo-item">
                {text}
                </li>
            <button onClick={compeleteHandler} className="done-btn">Completed</button>
            <button onClick={deleteHandler} className="trash-btn">Delete</button>
        </div>
    )
}

export default Work;
