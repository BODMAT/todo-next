import { useEffect, useRef, useState } from 'react';
import { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) inputRef.current?.focus();
    }, [isEditing]);

    const handleSave = () => {
        if (editText.trim() && editText !== todo.text) {
            onUpdate(todo.id, editText);
        }
        setIsEditing(false);
    };

    return (
        <li className="flex items-center justify-between p-3 border-b border-gray-50 dark:border-white/5 last:border-0 hover:bg-primary/5 transition-all group rounded-md">
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
                {!isEditing && (
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                        className="w-4 h-4 rounded border-gray-300"
                    />
                )}

                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                        className="flex-1 border-2 border-primary-neon rounded px-2 py-0.5 outline-none text-black dark:text-white bg-transparent custom-shadow"
                    />
                ) : (
                    <span
                        onDoubleClick={() => !todo.completed && setIsEditing(true)}
                        className={`flex-1 overflow-hidden cursor-pointer font-medium transition-colors ${todo.completed
                            ? 'line-through text-gray-400 opacity-60'
                            : 'text-gray-700 dark:text-gray-200 hover:text-primary-neon'
                            }`}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            <button
                onClick={() => onDelete(todo.id)}
                className="ml-2 px-2 text-2xl text-gray-300 hover:text-red-500 hover:scale-125 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                aria-label="Видалити завдання"
            >
                &times;
            </button>
        </li >
    );
}