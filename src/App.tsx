import React from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Outlet></Outlet>
        </div>
      </main>
      <footer className="footer">
        <div className="container"></div>
      </footer>
    </>
  );
}

export default App;
