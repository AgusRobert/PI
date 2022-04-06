import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

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
  return (
    <div>
      {country ? (
        
        <>
          <h3>{country.name}</h3>
          <img src={country.img} alt="Bandera del pais" />
          <h2>Continent: {country.continent}</h2>
          <h2>Subregion: {country.subregion}</h2>
          <h2>Capital: {country.capital}</h2>
          <h2>Area: {country.area} km²</h2>
          <h2>Population: {country.population}</h2>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
