import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/actions";
import Country from "./country";
import'./pages.css'
export default function Countries() {
  let countries = useSelector((state) => state.filteredCountries);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  },[dispatch]);
  return (
   <div className="country">
      {countries.map((country) => {
        return (
          <Country
            key={country.id}
            id={country.id}
            img={country.img}
            name={country.name}
            population={country.population}
          />
        );
      })}
    </div>
  );
}
