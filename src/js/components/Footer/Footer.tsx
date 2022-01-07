import React from "react";
import { NavLink } from 'react-router-dom';

import menuList from "../MenuItem/menuList";

import './Footer.scss';

const Footer = () => {

    return (

        <div className='footer'>
            <span className='autor-link'>
                <a href="https://github.com/Stanislav-Cherak" title='Stanislav Cherak'>Design by Stanislav Cherak</a>
            </span>

            <ul className='footer-menu'>
                {
                    menuList.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.path}>
                                    <span className='title'>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Footer;
