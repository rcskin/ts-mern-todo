//import usestate from react
import React, {useState} from "react";

//Define structure of to-do item
interface Todo {
    id: number;
    text: string;
    completed: boolean;
};

//Create function for the to-do app
const TodoApp: React.FC = () => {
    //State to hold to-do list with interface for implying types
    const [todos, setTodos] = useState<Todo[]>([]);

    //State to hold an input value with type string
    const [task, setTask] = useState<string>("");

    //add task function
    const addTodo = () => {
        if (task.trim() ==="") //trim method will take away leading/trailing whitespace
            return; //early return bypasses if empty task is trying to be added
    
        const newTodo: Todo = {  //Todo type to ensure new todo task follows same structure
            id: Date.now(), //unique id number generated
            text: task, //the task being added
            completed: false, //false when adding new task
        };
        setTodos([...todos, newTodo]); //updates state of todo list
        /* using spread operator because it will append the new task
        to the current list of to-dos.  */
        setTask("");  //clears input after submitted so it is empty string
        };
   
    return (
        <div>
            <h2>To Do App</h2>

        </div>
    )
};

export default TodoApp; 