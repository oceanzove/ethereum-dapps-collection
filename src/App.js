import React from 'react';
import './App.css'
import UploadFile from "./components/UploadFile/UploadFile";

function App() {
  return (
      <div className='app-wrapper'>
        <div className='app-wrapper-content'>
          <UploadFile />
        </div>
      </div>
  );
}

export default App;
