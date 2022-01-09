import React, { useState } from 'react';
import classNames from 'classnames';

import MenuItem from '../MenuItem/MenuItem';
import menuList from '../MenuItem/menuList';
import Menu from '../../../image/menu.svg';
import Close from '../../../image/close.svg';
import Logo from '../../../image/logo.svg';

import './Sidebar.scss';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = (): void => setIsOpen(!isOpen);

    return (

        <nav className={classNames('navigation', isOpen ? 'bg' : undefined)}>

            <div className='logo'>
                <a href='/' className='logo-link'>
                    <img src={Logo} className='logo-icon' alt='CryptoWorld' />
                    <span className='logo-title'>CryptoWorld</span>
                </a>
            </div>

            <div
                tabIndex={0}
                role='button'
                onKeyPress={toggle}
                onClick={toggle}
                className='expand-button'>
                {isOpen
                    ? <img src={Close} className='icon' alt='Close' />
                    : <img src={Menu} className='icon' alt='Menu' />}
            </div>

            <ul>
                {
                    menuList.map((item, index) => {
                        return (
                            <li key={index}>
                                <MenuItem {...item} />
                            </li>
                        )
                    })
                }
            </ul>
        </nav >
    )
}

export default Sidebar;
