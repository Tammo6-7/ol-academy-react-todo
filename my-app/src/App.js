
import React , {useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo/Addtodo';
import Header from './components/Header/Header';
import ListTodo from './components/ListTodo/ListTodo';

function App() {
  const [todo, setTodo] = useState([
    {
        id: [],
        title: 'Your first Task',
        status: true,
    }
])
  return (
    <div>
        <p>
          This is my First React Task  <i class="fa-brands fa-react"></i>
        </p>
        <Header   todo={todo} setTodo={setTodo}/>
        <AddTodo  todo={todo} setTodo={setTodo}/>
        <ListTodo todo={todo} setTodo={setTodo}/>
    </div>
  );
}
export default App;
