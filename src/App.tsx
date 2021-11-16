import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Todos } from "./components/todos/Todos";
import { TodosList } from "./components/todo-list/TodosList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/list">
            <TodosList readOnly={true} />
          </Route>
          <Route path="/">
            <div className="container">
              <Todos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
