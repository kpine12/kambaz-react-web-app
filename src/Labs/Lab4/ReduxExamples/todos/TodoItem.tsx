import { useDispatch } from "react-redux"
import { setTodo, deleteTodo } from "./todosReducer"

export default function TodoItem(todo: any) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            &nbsp;
            &nbsp;
            <button onClick={() => dispatch(setTodo(todo))}
                    className="btn btn-primary"
                    id="wd-set-todo-click">Edit</button>
            &nbsp;
            &nbsp;
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                    className="btn btn-danger"
                    id="wd-delete-todo-click">Delete</button>
            {todo.title}
        </li>
    )
}