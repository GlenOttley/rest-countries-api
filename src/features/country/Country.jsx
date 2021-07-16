import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountry, setLoading } from "./countrySlice";

function Country({ match }) {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.country);
  const loading = useSelector((state) => state.country.loading);
  // const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getCountry(match.params.alpha3Code));
  }, [dispatch, match.params.alpha3Code]);

  return (
    <>
      {loading ? null : (
        <div className="container">
          <Link to="/" className="link">
            <button className="country__btn btn">
              <i className="fa fa-arrow-left icon"></i>
              Back
            </button>
          </Link>
          <div className="country">
            <div className="country__left">
              <div className="country__container">
                <img src={country.flag} alt="" className="country__flag" />
              </div>
            </div>

            <div className="country__right">
              <h3 className="country__heading">{country.name}</h3>
              <div className="country__copy">
                <div className="copy__top">
                  <p className="country__text">
                    <span className="country__text--bold">Native Name: </span>
                    {country.nativeName}
                  </p>
                  <p className="country__text">
                    <span className="country__text--bold">Population: </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p className="country__text">
                    <span className="country__text--bold">Region: </span>
                    {country.region}
                  </p>
                  <p className="country__text">
                    <span className="country__text--bold">Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p className="country__text">
                    <span className="country__text--bold">Capital: </span>
                    {country.capital}
                  </p>
                </div>

                <div className="copy__bottom">
                  <p className="country__text">
                    <span className="country__text--bold">
                      Top Level Domain:{" "}
                    </span>
                    {country.topLevelDomain}
                  </p>
                  <p className="country__text">
                    <span className="country__text--bold">Currency: </span>
                    {country.currencies[0].name}
                  </p>
                  <p className="country__text">
                    <span className="country__text--bold">Language: </span>
                    {country.languages[0].name}
                  </p>
                </div>
              </div>

              <div className="borders">
                <p className="borders__heading">Border Countries:</p>
                <div className="borders__row">
                  {country.borders.map((border) => (
                    <Link to={`/${border}`} className="link" key={border}>
                      <button className="borders__btn btn">{border}</button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Country;
