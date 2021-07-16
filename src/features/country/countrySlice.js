import { createSlice } from "@reduxjs/toolkit";

async function fetchCountry(countryName) {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryName}`);
  return response.json();
}

export const getCountry = countryName => async (dispatch, state) => {
  const response = await fetchCountry(countryName);
  dispatch({
    type: "country/setCountry",
    payload: response
  })
  dispatch({
    type: "country/setLoading",
    payload: false
  })
}

const countrySlice = createSlice({
  name: "country",
  initialState: {
    loading: true,
    country: []
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setLoading } = countrySlice.actions;
export default countrySlice.reducer;