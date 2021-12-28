import React from 'react';
import { Link } from 'react-router-dom';


import './Sidebar.scss';
import HomeImage from './home.svg';
import Cryptocurrencies from './cyrrencies.svg';
import Exchanges from './exchange.svg';
import News from './news.svg';

const Sidebar = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li className='list active'>
                    <b></b>
                    <b></b>
                    <Link to='/'>
                        <img src={HomeImage} className='icon' alt='Home' />
                        <span className='title'>Home</span>
                    </Link>
                </li>

                <li className='list'>
                    <b></b>
                    <b></b>
                    <Link to='/Cryptocurrencies'>
                        <img src={Cryptocurrencies} className='icon' alt='Cryptocurrencies' />
                        <span className='title'>Cryptocurrencies</span>
                    </Link>
                </li>

                <li className='list'>
                    <b></b>
                    <b></b>
                    <Link to='/Exchanges'>
                        <img src={Exchanges} className='icon' alt='Exchanges' />
                        <span className='title'>Exchanges</span>
                    </Link>
                </li>

                <li className='list'>
                    <b></b>
                    <b></b>
                    <Link to='/News'>
                        <img src={News} className='icon' alt='News' />
                        <span className='title'>News</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
