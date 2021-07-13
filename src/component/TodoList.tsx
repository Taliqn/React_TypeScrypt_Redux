import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const TodoList: React.FC = () => {
    const {page, loading, error, todos, limit} = useTypedSelector(state => state.todo)
    const {} = useAction()

    if (loading) {
        return <h1>идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.name}
                </div>
            )}
        </div>
    );
};

export default TodoList;