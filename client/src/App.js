import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SpotDetail from './components/HomePage/SpotDetail/SpotDetail';
import Bookings from './components/Dashboard/Bookings/Bookings';
import AddSpot from './components/Dashboard/AddSpot/AddSpot';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const UserData = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false
  });
  return (
    <UserData.Provider value={[user, setUser]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/spotDetail/:id">
              <SpotDetail />
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageBooking">
            <Bookings />
            </PrivateRoute>
            <Route path="/bookings">
            <Bookings />
            </Route>
            <Route path="/AddSpot">
              <AddSpot />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </UserData.Provider>
  );
}

export default App;
