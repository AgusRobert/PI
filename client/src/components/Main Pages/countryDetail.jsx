import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import './countryDetail.css'

export default function CountryDetail() {
  const [country, setCountry] = useState(null);
  let { idCountry } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/countries/" + idCountry)
      .then((response) => {
        setCountry(response.data);
      });
    return () => {
      setCountry(null);
    };
  }, []);
  let totalActiv = country ? (
    country.activities.map((a) => {
      return (
        <div className="contentA">
          <h4>Name: {a.name}</h4>
          <h4>Difficulty: {a.difficulty}/5</h4>
          <h4>Duration: {a.duration} HS</h4>
          <h4>Season: {a.season}</h4>
        </div>
      );
    })
  ) : (
    <div>loading...</div>
  );
  return (
    <div className="country">
      {country ? (
        <>
          <div className="country__item">
           <div className="content">
            <h2>{country.name}</h2>
            <img src={country.img} alt="Bandera del pais" />
            </div>
            <h2>Code: {country.id}</h2>
            <h2>Continent: {country.continent}</h2>
            <h2>Subregion: {country.subregion}</h2>
            <h2>Capital: {country.capital}</h2>
            <h2>Area: {country.area} km²</h2>
            <h2>Population: {country.population}</h2>
            
          </div>
          <div className="country__item"><h2>Activities: {totalActiv}</h2>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
