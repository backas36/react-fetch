import TodoListAxios from './features/todos-axios/TodoListAxios';
import TodoList from './features/todos-react-query/TodoList';
import TodoListRtk from './features/todos-rtk/TodoListRtk';

const App = () => {
  //return <TodoList />;
  //return <TodoListRtk />;
  return <TodoListAxios />;
};
export default App;
