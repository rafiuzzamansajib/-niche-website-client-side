import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import Explores from './Pages/ExplorePage/Explores/Explores';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/products">
              
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              
            </PrivateRoute>
            <Route path="/explore">
              <Explores></Explores>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
