import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import Exchanges from '../Exchanges/Exchanges';
import News from '../News/News';
import CoinInfo from '../CoinInfo/CoinInfo';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import './App.scss';

function App() {

    return (
        <div className='container'>
            <Sidebar />
            <div className='content-wrapper'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/Cryptocurrencies' element={<Cryptocurrencies />} />
                    <Route path='/Exchanges' element={<Exchanges />} />
                    <Route path='/News' element={<News />}>
                        <Route path='/News/:search' element={<News />} />
                    </Route>
                    <Route path='/Coin/:id' element={<CoinInfo />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
