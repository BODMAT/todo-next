interface TodoCounterProps {
    count: number;
}

export function TodoCounter({ count }: TodoCounterProps) {
    return (
        <div className="mt-6 pt-4 border-t border-primary/20 text-gray-500 font-medium">
            Залишилось виконати: <span className="text-primary-neon font-bold drop-shadow">{count}</span>
        </div>
    );
}