import React from "react";
import { Link } from "react-router-dom";
const CountriesXP =({countries, loading})=>{
    
   
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul>
        {countries.map(country =>(
            <Link to ={`/${country.id}`} key= {country.id}>
            <li>
            <h2>{country.name}</h2>
            <img src={country.img} alt="Flag" />
            <h4>Population: {country.population}</h4>
            </li></Link>
        ))}
    </ul>
}
export default CountriesXP