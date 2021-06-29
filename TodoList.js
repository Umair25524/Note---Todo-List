import React from 'react'

import Work from './Work';

function TodoList ({ todos, setTodos, filteredTodos }) {
    return (
        <div className="MyList">
            <ul className="TodoList">
                {filteredTodos.map((work) => (
                    <Work 
                    setTodos={setTodos} 
                    todos={todos} 
                    todo={work}
                    text={work.text} 
                    key={work.id}
                    />
 
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
