import { createSlice } from '@reduxjs/toolkit'
import { selectRegionFilter } from '../regionFilter/regionFilterSlice'
import { selectSearchTerm } from '../searchTerm/searchTermSlice'

async function fetchCountries() {
  const response = await fetch('https://restcountries.com/v2/all')
  return response.json()
}

export async function getCountries(dispatch, state) {
  const response = await fetchCountries()
  dispatch({
    type: 'countries/setCountries',
    payload: response,
  })
  dispatch({
    type: 'countries/setLoading',
    payload: false,
  })
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    loading: true,
    countries: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export default countriesSlice.reducer

const selectAllCountries = (state) => state.countries

export const selectFilteredCountries = (state) => {
  const allCountries = selectAllCountries(state.countries)
  const regionFilter = selectRegionFilter(state)
  const searchTerm = selectSearchTerm(state)

  return allCountries.filter(
    (country) =>
      country.region.toLowerCase().includes(regionFilter.toLowerCase()) &&
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
