import React from "react";
import "./navbar.scss"
import {NavLink} from "react-router-dom";
import menuIcon from "../../img/menu.svg";
import crossIcon from "../../img/cross.svg"

import {useState} from "react";

const Navbar = () => {

    const [iconImage, setIconImage] = useState(menuIcon);
    const [burgerMenu, setBurgerMenu] = useState(false);

    const closeBurgerMenu = () => {

    }
    return (
        <div className="navbar">
            {!burgerMenu ?
            <div className="burger-nav-close">
                    <div className="all-items">
                        <img onClick={() => {
                            setBurgerMenu(!burgerMenu);
                        }} className="menu-icon" src={iconImage} alt="menu-icon"/>
                        <div className="phone-number">
                            +375 44 722 02 55
                        </div>
                    </div>
            </div>
            :
            <div className="burger-nav-open">
                <div className="burger-items">
                    <img onClick={() => setBurgerMenu(!burgerMenu)} className="cross-icon" src={crossIcon} alt="cross-icon"/>
                    <ul className="nav-burger-items">
                        <li onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink to="/home">ГЛАВНАЯ</NavLink>
                        </li>
                        <li onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink to="/halls">ЗАЛЫ</NavLink>
                        </li>
                        <li onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink to="/equipment">ОБОРУДОВАНИЕ</NavLink>
                        </li>
                        <li onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                        </li>
                        <li onClick={() => setBurgerMenu(!burgerMenu)}>
                            <NavLink to="/rules">ПРАВИЛА</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
            }
            <div className="full-nav">
                <div className="nav-item">
                    <NavLink to="/home">ГЛАВНАЯ</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/halls">ЗАЛЫ</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/equipment">ОБОРУДОВАНИЕ</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/rules">ПРАВИЛА</NavLink>
                </div>
            </div>
            </div>

    )
}

export default Navbar;