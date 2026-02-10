import { Todo } from '../types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, text: string) => void;
    isMounted: boolean;
}

export function TodoList({ todos, onToggle, onDelete, onUpdate, isMounted }: TodoListProps) {
    if (!isMounted) {
        return (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
                <div className="w-8 h-8 border-4 border-primary/20 border-t-primary-neon rounded-full animate-spin"></div>
                <p className="text-primary-neon animate-pulse text-sm font-medium">Завантаження...</p>
            </div>
        );
    }

    return (
        <ul className="space-y-3 mt-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
}