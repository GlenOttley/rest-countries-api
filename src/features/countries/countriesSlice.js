import { createSlice } from "@reduxjs/toolkit";
import { selectRegionFilter } from "../regionFilter/regionFilterSlice";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

async function fetchCountries() {
  const response = await fetch("https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;subregion;topLevelDomain;currencies;languages;borders;numericCode;alpha3Code")
  return response.json()
}

export async function getCountries(dispatch, state) {
  const response = await fetchCountries();
  dispatch({
    type: 'countries/setCountries',
    payload: response
  })
}

const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    setCountries: (state, action) => {
      return action.payload;
    }
  }
})

export default countriesSlice.reducer;

const selectAllCountries = (state) => state.countries;

export const selectFilteredCountries = (state) => {
  const allCountries = selectAllCountries(state);
  const regionFilter = selectRegionFilter(state);
  const searchTerm = selectSearchTerm(state);

  return allCountries.filter((country) =>
    country.region.toLowerCase().includes(regionFilter.toLowerCase()) 
    && country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
