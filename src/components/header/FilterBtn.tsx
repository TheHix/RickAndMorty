import React, { useEffect, useRef, useState } from "react";
import MenuList from "./dropDown/MenuList";

const FilterBtn = () => {
  const [dropDownInfo, setDropDownInfo] = useState(false);

  const wrapperRef = useRef<any>(null);
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
    <div className="dropdown-block" ref={wrapperRef}>
      <button
        onClick={e => {
          setDropDownInfo(!dropDownInfo);
        }}
        className="dropdown__info-btn dropdown-btn"
      >
        Выбрать сезон
      </button>
      {dropDownInfo && <MenuList />}
    </div>
  );
};

export default FilterBtn;
