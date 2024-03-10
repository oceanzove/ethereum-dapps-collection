import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from './components/Registration/Registration';
import AdminPanel from './components/AdminPanel/AdminPanel';
import UserPanel from "./components/UserPanel/UserPanel";
import AuthorizationContainer from "./components/Authorization/AuthorizationContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthorizationContainer/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/admin' element={<AdminPanel/>}/>
                <Route path='/user' element={<UserPanel/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

