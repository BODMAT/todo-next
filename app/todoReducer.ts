import { Todo, TodoAction, TODO_ACTIONS } from './types';

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return [
                {
                    id: crypto.randomUUID(),
                    text: action.payload,
                    completed: false,
                    createdAt: new Date(),
                },
                ...state,
            ];

        case TODO_ACTIONS.TOGGLE:
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );

        case TODO_ACTIONS.DELETE:
            return state.filter((todo) => todo.id !== action.payload);

        case TODO_ACTIONS.UPDATE:
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );

        case TODO_ACTIONS.LOAD:
            return action.payload;

        default:
            return state;
    }
}