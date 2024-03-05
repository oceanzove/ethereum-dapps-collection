import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<p>Hekki Wi</p>} />
        <Route path="/auth" element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

