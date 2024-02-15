import React from 'react';
import './App.css'
import UploadFileContainer from "./components/UploadFile/UploadFileContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FactorialContainer from "./components/Factorial/FactorialContainer";
import BinaryToDecimalContainer from "./components/BinaryToDecimal/BinaryToDecimalContainer";
import OctagonalToDecimalContainer from "./components/OctagonalToDecimal/OctagonalToDecimalContainer";
import ConverterContainer from "./components/Converter/ConverterConataier";

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
                        <Route path='/binaryTodecimal' element={<BinaryToDecimalContainer/>}/>
                        <Route path='/octagonalTodecimal' element={<OctagonalToDecimalContainer/>}/>
                        <Route path='/converter' element={<ConverterContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
