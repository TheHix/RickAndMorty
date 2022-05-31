import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
const Header = () => {
    return (
        <header className='header'>
            <div className="header__bg">
                <div className="header__container container">
                    <div className="header__body">
                        <Link to="/" className="header__logo">
                            <img src={logo} alt="" />
                        </Link>
                        <input type="text" className="header__search" placeholder='Найти серию'/>
                        <div className="header__dropdown dropdown">
                            <button className="dropdown__info dropdown-btn">Выбрать сезон</button>
                            <button className="dropdown__sort dropdown-btn">Сортировка</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;