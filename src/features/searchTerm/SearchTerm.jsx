import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "./searchTermSlice";

function SearchTerm() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  const handleSearchTerm = ({ target }) => {
    dispatch(setSearchTerm(target.value));
  };

  return (
    <div className="search-term">
      <input
        className="search-term__input"
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchTerm}
      />
    </div>
  );
}

export default SearchTerm;
