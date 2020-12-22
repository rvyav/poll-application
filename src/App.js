import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import ErrorPage from './components/Error';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/error" component={ErrorPage} />
      </Switch>

    </Router>
  );
}

export default App;
