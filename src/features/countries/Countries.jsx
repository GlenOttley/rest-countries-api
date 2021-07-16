import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "./countriesSlice";
import { selectFilteredCountries } from "./countriesSlice";

function Countries() {
  const dispatch = useDispatch();
  const allCountries = useSelector(selectFilteredCountries);

  useEffect(() => {
    dispatch(getCountries);
  }, [dispatch]);

  return (
    <div className="countries container">
      {allCountries.map((country) => (
        <Link
          to={`/${country.alpha3Code}`}
          key={country.alpha3Code}
          className="countries__card"
        >
          <div className="countries__container">
            <img
              className="card__flag"
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div className="card__copy">
            <h4 className="card__heading">{country.name}</h4>
            <p className="card__text">
              <span className="card__text--bold">Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p className="card__text">
              <span className="card__text--bold">Region: </span>
              {country.region}
            </p>
            <p className="card__text">
              <span className="card__text--bold">Capital: </span>
              {country.capital}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Countries;
