import React from 'react';
import Main from './pages/Main';
import Roadmap from './pages/Roadmap';
import {Outlet} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundDots from './components/BackgroundDots';
import "./services/i18n";

function App() {
    return ( 
        <div>
            <BackgroundDots/>
            <Header/>
            <Outlet /> 
            <Footer/>
        </div>
    );
}

export default App;