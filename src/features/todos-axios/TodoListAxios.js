import { useEffect, useState } from 'react';

import { addTodo, delTodo, getTodos, updateTodo } from '../../lib/api/todos';

const TodoListAxios = () => {
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  console.count("render");
  const handleUpdateTodo = async (todo) => {
    try {
      await updateTodo(todo);
      await fetchTodos();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteTodo = async (todo) => {
    try {
      await delTodo(todo);
      await fetchTodos();
    } catch (err) {
      setError(err.message);
    }
  };
  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const todosData = await getTodos();
      const todos = todosData.sort((a, b) => b.id - a.id);
      setTodos(todos);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTodo({ userId: 1, title: newTodo, completed: false });
      await fetchTodos();
    } catch (err) {
      setError(err.message);
    }
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <i className="fa-solid fa-upload"></i>
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                handleUpdateTodo({
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button
            className="trash"
            onClick={() => handleDeleteTodo({ id: todo.id })}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </article>
      );
    });
  }

  return (
    <main>
      <h2>Todo List - Axios</h2>
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoListAxios;
