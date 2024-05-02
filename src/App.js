import { Routes, Route, Navigate} from "react-router-dom";
import React from 'react';
import LandingPage from "./Componets/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
     </Routes> 
    </div>
  );
}

export default App;
