import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
import regionFilterReducer from "../features/regionFilter/regionFilterSlice";
import countriesReducer from "../features/countries/countriesSlice";
import countryReducer from "../features/country/countrySlice";

const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    regionFilter: regionFilterReducer,
    countries: countriesReducer,
    country: countryReducer
  }
})

export default store;