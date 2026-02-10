'use client';
import { TodoForm } from "./components/TodoForm";
import { TodoCounter } from "./components/TodoCounter";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

export default function Home() {
  const {
    todos, allTodosCount, filter, setFilter, isMounted,
    addTodo, toggleTodo, deleteTodo, updateTodo
  } = useTodos();
  return (
    <main className="min-h-screen bg-[--background] py-10 px-4 flex justify-center font-sans">
      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-[#121212] p-6 rounded-lg shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-center text-primary-neon tracking-wider uppercase">
            Список завдань
          </h1>

          <div className="flex gap-3 justify-center max-[450px]:items-center max-[450px]:flex-col mb-6">
            <TodoForm onAdd={addTodo} />
            <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
          </div>

          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            isMounted={isMounted}
          />
        </div>

        <div className="mt-6 pt-4">
          <TodoCounter count={allTodosCount} />
        </div>
      </div>
    </main>
  );
}