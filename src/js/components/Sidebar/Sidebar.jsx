import React, { useState } from 'react';
import classNames from 'classnames';

import MenuItem from '../MenuItem/MenuItem.tsx';
import menuList from '../MenuItem/menuList.ts';
import Menu from '../../../image/menu.svg';
import Close from '../../../image/close.svg';

import './Sidebar.scss';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <nav className={classNames('navigation', isOpen ? 'bg' : undefined)}>

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
        </nav>
    )
}

export default Sidebar;
