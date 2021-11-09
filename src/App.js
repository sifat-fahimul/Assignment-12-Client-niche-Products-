import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Purchase from './pages/Home/Purchase/Purchase';
import ExploreBike from './pages/ExploreBike/ExploreBike';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/purchase'>
            <Purchase></Purchase>
          </Route>
          <Route path='/explore'>
            <ExploreBike></ExploreBike>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
