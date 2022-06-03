import { useStore } from "effector-react";
import React from "react";
import { $sort, setSort } from "../../store";

const SortBtn = () => {
    const sort = useStore($sort)
  return (
    <div className="dropdown-block">
      <select className="dropdown__sort-btn dropdown-btn btn-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option className="btn-sort__item">по эпизоду</option>
        <option className="btn-sort__item">по названию</option>
      </select>
    </div>
  );
};

export default SortBtn;
