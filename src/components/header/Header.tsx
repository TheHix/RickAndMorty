import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import DropDownInfo from "./dropDown/DropDownInfo";

const Header: React.FC = () => {
  const [dropDownInfo, setDropDownInfo] = useState(false);

  const wrapperRef = useRef<any>(null);
  const url = useLocation();
  const nav = useNavigate();
  const goBack = () => nav(-1);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropDownInfo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
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
                <div className="dropdown-block" ref={wrapperRef}>
                  <button
                    onClick={e => {
                      setDropDownInfo(!dropDownInfo);
                    }}
                    className="dropdown__info-btn dropdown-btn"
                  >
                    Выбрать сезон
                  </button>
                  {dropDownInfo && <DropDownInfo />}
                </div>
                <div className="dropdown-block">
                  <select className="dropdown__sort-btn dropdown-btn btn-sort">
                    <option className="btn-sort__item">по эпизоду</option>
                    <option className="btn-sort__item">по названию</option>
                  </select>
                </div>
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
