// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';  
import AppHeader from './Components/Header';
import AppFooter from './Components/Footer';

function App() {
  return (
    <>
      <div className="header"><AppHeader /></div>
      <div className="outlet">
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
}

export default App;
