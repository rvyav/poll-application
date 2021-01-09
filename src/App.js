import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import LogIn from './components/authentication/Login';
// import LogOut from './components/authentication/LogOut';
import SignUp from './components/authentication/SignUp';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import UpdateProfile from "./components/UpdateProfile";
import ErrorPage from './components/Error';
import CreatePoll from './components/poll/Create';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/updateprofile" component={UpdateProfile} />
        <Route exact path="/error" component={ErrorPage} />
        <Route exact path="/create" component={CreatePoll} />
      </Switch>
    </Router>
  );
}

export default App;
