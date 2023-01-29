import TodoListAxios from './features/todos-axios/TodoListAxios';
import TodoListReactQuery
  from './features/todos-react-query/TodoListReactQuery';
import TodoListRtk from './features/todos-rtk/TodoListRtk';

const App = () => {
  //return <TodoListAxios />;
  //return <TodoListReactQuery />;
  return <TodoListRtk />;
};
export default App;

/**
 * axios (A) V.S react query with axios or rtk query (B)
 * 1. fetch data before component mounted when using B
 * 2. less code, and no need to handle loading, error states for fetching when using B
 *
 *
 *
 * rtk query V.S rtk query
 *
 */
