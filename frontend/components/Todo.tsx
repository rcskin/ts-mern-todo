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
   
    return (
        <div>
            <h2>To Do App</h2>
        </div>
    )
};

export default TodoApp; 