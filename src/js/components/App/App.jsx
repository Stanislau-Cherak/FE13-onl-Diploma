import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Button from '../Button/Button.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies.jsx';
import News from '../News/News.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';

import './App.scss';

function App() {

    return (
        <div className='container'>
            <Sidebar />
            <div className='content-wrapper'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/Cryptocurrencies' element={<Cryptocurrencies />} />
                    <Route path='/News' element={<News />}>
                    <Route path='/News/:search' element={<News />}/>
                    </Route>
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
