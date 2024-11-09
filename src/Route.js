import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import Hello from './Components/Hello';
import { HelloPerson } from './Components/Hello';
import Car from './Components/Car';

function RouteComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/car" element={<Car />} />
        <Route path="*" element={<div>Không tìm thấy trang web theo yêu cầu</div>} />
      </Routes>
    </Router>
  );
}

export default RouteComponent;
