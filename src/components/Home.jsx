import React from "react";
import SearchTerm from "../features/searchTerm/SearchTerm";
import RegionFilter from "../features/regionFilter/RegionFilter";
import Countries from "../features/countries/Countries";

function Home() {
  return (
    <div>
      <div className="search-filter container">
        <SearchTerm />
        <RegionFilter />
      </div>
      <Countries />
    </div>
  );
}

export default Home;
