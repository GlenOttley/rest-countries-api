import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRegionFilter } from "./regionFilterSlice";

function RegionFilter() {
  const dispatch = useDispatch();
  const regionFilter = useSelector((state) => state.regionFilter);

  const handleRegionFilter = ({ target }) => {
    dispatch(setRegionFilter(target.innerHTML));
    toggleDropdown();
  };

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const dropdownHandler = () => {
    toggleDropdown();
  };

  return (
    <div className="region-filter">
      <div className="region-filter__selector">
        <div className="row spaced" onClick={dropdownHandler}>
          <p>{regionFilter ? regionFilter : "Filter by Region"}</p>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
      {dropdown && (
        <div className="region-filter__options column">
          <p onClick={handleRegionFilter}>America</p>
          <p onClick={handleRegionFilter}>Africa</p>
          <p onClick={handleRegionFilter}>Asia</p>
          <p onClick={handleRegionFilter}>Europe</p>
          <p onClick={handleRegionFilter}>Oceania</p>
        </div>
      )}
    </div>
  );
}

export default RegionFilter;
