import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="form-signin">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Login/>
      </main>
    </div>
  );
}

export default App;
