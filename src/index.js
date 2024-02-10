import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import {ContractManagerProvider} from "./components/services/ContractManagerContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContractManagerProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </ContractManagerProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//TODO Написать стек, что это зачем, зачем это и как запускать (FLUX ARCHITECTURE)

//TODO Сделать экран приветствия
