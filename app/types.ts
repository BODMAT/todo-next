export type Todo = {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
};

export const TODO_ACTIONS = {
    ADD: 'ADD_TODO',
    TOGGLE: 'TOGGLE_TODO',
    DELETE: 'DELETE_TODO',
    LOAD: 'LOAD_TODOS',
    UPDATE: 'UPDATE_TODO',
} as const;

export type TodoAction =
    | { type: typeof TODO_ACTIONS.ADD; payload: string }
    | { type: typeof TODO_ACTIONS.TOGGLE; payload: string }
    | { type: typeof TODO_ACTIONS.DELETE; payload: string }
    | { type: typeof TODO_ACTIONS.LOAD; payload: Todo[] }
    | { type: typeof TODO_ACTIONS.UPDATE; payload: { id: string; text: string } };

export type FilterStatus = 'all' | 'active' | 'completed';