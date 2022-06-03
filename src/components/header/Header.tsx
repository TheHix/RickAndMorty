import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import FilterBtn from "./FilterBtn";
import SortBtn from "./SortBtn";

const Header: React.FC = () => {
  const url = useLocation();
  const nav = useNavigate();
  const goBack = () => nav(-1);

  return (
    <header className="header">
      <div className="header__bg">
        <div className="header__container container">
          <div className="header__body">
            <Link to="/" className="header__logo">
              <img src={logo} alt="" />
            </Link>
            {url.pathname === "/" ? (
              <div className="header__dropdown dropdown">
                <FilterBtn />
                <SortBtn />
              </div>
            ) : (
              <div onClick={goBack} className="header__back-btn">
                Назад
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
