import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import DropDownInfo from "./dropDown/dropDownInfo";
import DropDownSort from "./dropDown/dropDownSort";
const Header = () => {
  const [dropDownInfo, setDropDownInfo] = useState(false);
  return (
    <header className="header">
      <div className="header__bg">
        <div className="header__container container">
          <div className="header__body">
            <Link to="/" className="header__logo">
              <img src={logo} alt="" />
            </Link>
            <div className="header__dropdown dropdown">
              <div className="dropdown-block">
                <button
                  onClick={() => setDropDownInfo(!dropDownInfo)}
                  className="dropdown__info-btn dropdown-btn"
                >
                  Выбрать сезон
                </button>
                {dropDownInfo && <DropDownInfo />}
              </div>
              <div className="dropdown-block">
                <select className="dropdown__sort-btn dropdown-btn btn-sort">
                  <option className="btn-sort__item">по эпизоду</option>
                  <option className="btn-sort__item">
                    по названию
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
