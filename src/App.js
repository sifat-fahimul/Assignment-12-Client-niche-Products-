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
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivetRoute from './pages/Login/PrivateRoute/PrivetRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Pay from './pages/Dashboard/Pay/Pay';
import Review from './pages/Dashboard/Review/Review';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivetRoute>
            <PrivetRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path='/pay'>
              <Pay></Pay>
            </PrivetRoute>
            <PrivetRoute path='/review'>
              <Review></Review>
            </PrivetRoute>
            <PrivetRoute path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivetRoute>
            <PrivetRoute path='/addProduct'>
              <AddProduct></AddProduct>
            </PrivetRoute>

            <Route path='/explore'>
              <ExploreBike></ExploreBike>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
