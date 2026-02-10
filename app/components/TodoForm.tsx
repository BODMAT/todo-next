import { useState } from 'react';

interface TodoFormProps {
    onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!text.trim()) return;

        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full gap-2 mb-6 max-[450px]:items-center max-[450px]:flex-col max-[450px]:mb-0">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Що потрібно зробити?"
                className="flex-1 w-full border border-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-neon font-sans transition-all focus-shadow active:scale-95 text-white"
            />
            <button
                type="submit"
                className="bg-primary hover:bg-primary-neon border border-white text-white px-6 py-2 rounded transition-all font-semibold cursor-pointer shadow-sm hover-shadow active:scale-95"
            >
                Додати
            </button>
        </form>
    );
}