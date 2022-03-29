const {Country}= require('../src/db.js')
const axios = require("axios");

//Funcion que recorre el array que nos llega y alimenta la base de datos.

const fetchCountries = async()=>{
    let countries = await axios.get("https://restcountries.com/v3.1/all")
  countries.data.forEach((country) => {
      const {
        name,
        cioc,
        cca3,
        flags,
        continents,
        capital,
        subregion,
        area,
        population,
      } = country;
      Country.create({
          id: cca3||cioc,
          name: name.common,
          img: flags.png,
          continents: continents[0],
          capital: capital?capital[0]:'No hay',
          subregion: subregion,
          area: area,
          population: population,
      })
    
    
    })
} 

module.exports = fetchCountries