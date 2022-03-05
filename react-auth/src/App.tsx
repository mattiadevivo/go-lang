import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const [name, setName] = useState('');

  useEffect(() => {
      //()(); is a shortage tp execute async code  where not allowed
      (
      async () => {
          const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/user', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
              credentials: 'include',
          });
          const content = await response.json();
          setName(content.name);
      }
  )();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name}/>
        <main className="form-signin">

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home name={name} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div >
  );
}

export default App;
