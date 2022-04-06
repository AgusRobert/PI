const { Country } = require("../src/db.js");
const axios = require("axios");

//Funcion que recorre el array que nos llega y alimenta la base de datos.

const fetchCountries = async () => {
  let countries = await axios.get("https://restcountries.com/v3.1/all");
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
      // languages,
      // currencies,
    } = country;
    Country.create({
      id: cca3 || cioc,
      name: name.common,
      img: flags.png,
      continent: continents[0],
      capital: capital ? capital[0] : "No tiene",
      subregion: subregion,
      area: area,
      population: population,
      // languages: languages,
      // currencies: currencies,
    });
  });
};

module.exports = fetchCountries;
