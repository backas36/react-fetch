import { useQuery, useQueryClient } from 'react-query';

import { getTodos } from '../../lib/api/todos';

const TodoListReactQuery2 = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
  return <div>{JSON.stringify(todos)}</div>;
};
export default TodoListReactQuery2;
