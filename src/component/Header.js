import React from 'react';
import {NavLink} from'react-router-dom';
const Header = () =>
(
    <div>
        <h1>Expensify App</h1>
        <NavLink to = "/" activeClassName = "is__active" exact = {true}>Home</NavLink>
        <NavLink to = "/create" activeClassName = "is__active">Create</NavLink>
        <NavLink to = "/edit/:id" activeClassName = "is__active">Expense</NavLink>
        <NavLink to = "/help" activeClassName = "is__active">Help</NavLink>
    </div>
);
export default Header;
