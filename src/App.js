import React from 'react';
import './App.css'
import UploadFileContainer from "./components/UploadFile/UploadFileContainer";

function App() {
  return (
      <div className='app-wrapper'>
        <div className='app-wrapper-content'>
          <UploadFileContainer/>
        </div>
      </div>
  );
}

export default App;
