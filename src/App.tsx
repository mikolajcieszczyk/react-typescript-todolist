import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ShowData from './components/ShowData';
import { TodoDetails } from './components/TodoDetails';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={ShowData} />
          <Route path='/todos/:todoId' component={TodoDetails} />
          <Route path='/addtodo' component={AddTodo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
