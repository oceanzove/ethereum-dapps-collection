import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {ContractManagerProvider} from "./components/Services/ContractManagerContext";


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
