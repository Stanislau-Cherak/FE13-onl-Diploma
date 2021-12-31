import React from "react";
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
    title: string;
    path: string;
    image: any
}

const MenuItem: React.FC<MenuItemProps> = ({ title, path, image }) => {
    return (
        <NavLink className={({ isActive }) =>
            isActive ? 'active' : 'inactive'}
            to={path}>
            <b></b>
            <b></b>
            <img src={image.default} className='icon' alt={title} />
            <span className='title'>{title}</span>
        </NavLink>
    )
}

export default MenuItem;
