import { useEffect, useState } from 'react';

import {
  useAddTodoMutation, useDelTodoMutation, useGetTodosQuery,
  useUpdateTodoMutation,
} from '../api/apiSlice';
import TodoListReactQuery2 from '../todos-react-query/TodoListReactQuery2';

const TodoListRtk = () => {
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [delTodo] = useDelTodoMutation();
  useEffect(() => {
    console.log("mounted");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
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
    content = <p>Loading</p>;
  } else if (isError) {
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
                updateTodo({ ...todo, completed: !todo.completed })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button className="trash" onClick={() => delTodo({ id: todo.id })}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </article>
      );
    });
  }
  return (
    <main>
      <h2>Todo List - RTK Query</h2>
      {newItemSection}
      {content}
      <TodoListReactQuery2 />
    </main>
  );
};
export default TodoListRtk;
