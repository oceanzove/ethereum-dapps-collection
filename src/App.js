import React from 'react';
import './App.css'
import UploadFileContainer from "./components/UploadFile/UploadFileContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FactorialContainer from "./components/Factorial/FactorialContainer";
import ConverterContainer from "./components/Converter/ConverterConataier";
import ConverterAdvanceContainer from "./components/ConverterAdvance/ConverterAdvanceContainer";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='app-wrapper-nav'>
                    <Navbar/>
                </div>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/uploadfile' element={<UploadFileContainer/>}/>
                        <Route path='/factorial' element={<FactorialContainer/>}/>
                        <Route path='/converter' element={<ConverterContainer/>}/>
                        <Route path='/converter-advance' element={<ConverterAdvanceContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
