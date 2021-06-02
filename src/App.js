import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Questions from './pages/Questions';
import Quizzes from './pages/Quizzes';
import Exercises from './pages/Exercises';

const App = () => {


  return (
    <div className="App">

    <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/questions">Questions</Link>
                </li>
                <li>
                  <Link to="/quizzes">Quizzes</Link>
                </li>
                <li>
                  <Link to="/exercises">Exercises</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/todos">Todos</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/questions">
                <Questions/>
              </Route>
              <Route path="/quizzes">
                <Quizzes/>
              </Route>
              <Route path="/exercises">
                <Exercises/>
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/todos">
                <Todos/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>

      
    </div>
  );
}

export default App;
