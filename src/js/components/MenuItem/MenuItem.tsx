import React from "react";
import { NavLink } from 'react-router-dom';

import { menuListType } from '../../types/types';


const MenuItem: React.FC<menuListType> = ({ title, path, image }) => {
    return (
        <NavLink className={({ isActive }) =>
            isActive ? 'active' : 'inactive'}
            to={path}>
            <b></b>
            <b></b>
            <img src={image} className='icon' alt={title} />
            <span className='title'>{title}</span>
        </NavLink>
    )
}

export default MenuItem;
