import { useGetTodosQuery } from '../api/apiSlice';

const TodoListRtk2 = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  return <div>{JSON.stringify(todos)}</div>;
};
export default TodoListRtk2;
