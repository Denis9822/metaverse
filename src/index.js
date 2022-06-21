import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import './styles/style.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Main from './pages/Main';
import Roadmap from './pages/Roadmap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  
    <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Main />}/>
            <Route index path="roadmap" element={<Roadmap />}/>  
        </Route>
    </Routes>
  </BrowserRouter>
);


