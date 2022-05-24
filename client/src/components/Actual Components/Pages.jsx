import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
const CountriesXP = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="masonry-grid">
      {countries.map((country) => (
        <div className="masonry-grid__item">
          <Link to={`/${country.id}`} key={country.id}>
            {" "}
            <div >
              <img src={country.img} alt="Flag" />
            </div>
            <div >
              <h2>{country.name}</h2>
              <h4>Continent : {country.continent}</h4>
              <h4>Population : {country.population}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default CountriesXP;

// div country
// div container
//  div card
// div face face1
// div content
// img flag img
// nombre del pais h3
// div/
// div/
// div face face 2
// div content
//  p popu
// div/
// div/
// div/
// div/
