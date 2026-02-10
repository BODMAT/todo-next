import { FilterStatus } from '../types';
import Image from 'next/image';

interface TodoFilterProps {
    currentFilter: FilterStatus;
    onFilterChange: (filter: FilterStatus) => void;
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
    const options: { id: FilterStatus; label: string }[] = [
        { id: 'all', label: 'Всі' },
        { id: 'active', label: 'Активні' },
        { id: 'completed', label: 'Виконані' },
    ];

    return (
        <div className="relative group">
            <button
                type="button"
                className={`p-2 text-gray-500 hover:text-primary-neon border rounded-md transition-all ${currentFilter !== 'all'
                    ? 'bg-primary/10 border-primary-neon text-primary-neon custom-shadow'
                    : 'bg-white border-gray-200'
                    }`}
            >
                <Image
                    src="/filter.svg"
                    alt="Фільтр"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    style={{ height: 'auto' }}
                />
            </button>

            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all z-10">
                <div className="p-1">
                    {options.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => onFilterChange(opt.id)}
                            className={`w-full cursor-pointer text-left px-3 py-2 text-sm rounded-md transition-colors ${currentFilter === opt.id
                                ? 'bg-primary/10 text-primary-neon font-bold'
                                : 'hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}