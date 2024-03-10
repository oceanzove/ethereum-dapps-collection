import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from './components/Registration/Registration';
import UserPanel from "./components/UserPanel/UserPanel";
import AuthorizationContainer from "./components/Authorization/AuthorizationContainer";
import AdminPanelContainer from "./components/AdminPanel/AdminPanelContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthorizationContainer/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/admin' element={<AdminPanelContainer/>}/>
                <Route path='/user' element={<UserPanel/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

