import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPanel from "./components/UserPanel/UserPanel";
import AuthorizationContainer from "./components/Authorization/AuthorizationContainer";
import AdminPanelContainer from "./components/AdminPanel/AdminPanelContainer";
import RegistrationContainer from "./components/Registration/RegistrationContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthorizationContainer/>}/>
                <Route path='/registration' element={<RegistrationContainer/>}/>
                <Route path='/admin' element={<AdminPanelContainer/>}/>
                <Route path='/user' element={<UserPanel/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

