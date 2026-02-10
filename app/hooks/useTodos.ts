import { useState, useEffect, useReducer, useMemo } from "react";
import { FilterStatus, TODO_ACTIONS, Todo } from "../types";
import { todoReducer } from "../todoReducer";

const initializer = (): Todo[] => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('todos-data');
    return saved ? JSON.parse(saved) : [];
};

export function useTodos() {
    const [todos, dispatch] = useReducer(todoReducer, [], initializer);
    const [filter, setFilter] = useState<FilterStatus>('all');
    const [isMounted, setIsMounted] = useState(false);

    //! This prevents Hydration Mismatch errors by ensuring that client-only data (like localStorage) is only rendered on the client
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('todos-data', JSON.stringify(todos));
        }
    }, [todos]);

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'active': return todos.filter(t => !t.completed);
            case 'completed': return todos.filter(t => t.completed);
            default: return todos;
        }
    }, [todos, filter]);

    return {
        todos: isMounted ? filteredTodos : [],
        allTodosCount: isMounted ? todos.filter(t => !t.completed).length : 0,
        filter,
        setFilter,
        isMounted,
        addTodo: (text: string) => dispatch({ type: TODO_ACTIONS.ADD, payload: text }),
        toggleTodo: (id: string) => dispatch({ type: TODO_ACTIONS.TOGGLE, payload: id }),
        deleteTodo: (id: string) => dispatch({ type: TODO_ACTIONS.DELETE, payload: id }),
        updateTodo: (id: string, text: string) => dispatch({ type: TODO_ACTIONS.UPDATE, payload: { id, text } }),
    };
}