import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Button from '../Button/Button.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';



import './App.scss';

function App() {



    return (
        <div className='container'>
            <Sidebar />
            <div className='content-wrapper'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
