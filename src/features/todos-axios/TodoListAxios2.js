import { useEffect, useState } from 'react';

import { getTodos } from '../../lib/api/todos';

const TodoListAxios2 = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const todosData = await getTodos();
      const todos = todosData.sort((a, b) => b.id - a.id);
      setTodos(todos);
    } catch (err) {}
  };
  useEffect(() => {
    console.log("mounted");
    fetchTodos();
  }, []);

  return <div>{JSON.stringify(todos)}</div>;
};
export default TodoListAxios2;
