import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoContext from "../contexts/TodoContext";
import AddTodo from "./AddTodo";

const App = () => {
  return(
    <TodoContext>
      <Router>
        <Navbar />
        <br/>
        <div className='uk-container'>
          <Switch>
            <Route path='/create'>
              <AddTodo />
            </Route>
            <Route path='/'>
              <h4>Minha lista de tarefas</h4>
              <TodoList/>
            </Route>
          </Switch>
        </div>
      </Router>
    </TodoContext>
  );
};

export default App;
