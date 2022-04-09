import Pages from "../Actual Components/Pages";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../Actual Components/searchBar";
import ContinentFilter from "../Actual Components/continentFilter";
import OrderAz from "../Actual Components/orderAz";
import OrderPop from "../Actual Components/orderPop";
import Countries from "../Actual Components/countries";
import Country from "../Actual Components/country";
import { Link } from "react-router-dom";
import { fetchCountries } from "../../store/actions";
import Pagination from "../Actual Components/Pagination";
import'./Home.css'
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  let countries = useSelector((state) => state.filteredCountries);
  let countriesC = useSelector((state) => state.filterCopia)
  let dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCountries());
    setLoading(false);
  }, []);
  useEffect(() => {
     setCurrentPage(1)
  }, [countries]);
 
 
  const iLastCountry = currentPage * countriesPerPage;
  const iFirstCountry = iLastCountry - countriesPerPage;
  const currentCountry = countries.slice(iFirstCountry, iLastCountry);
  const paginate = (pageN) => setCurrentPage(pageN)
  return (
  <>
  <body className="Home">
      <SearchBar /> 
      <ContinentFilter />
      <OrderAz />
      <OrderPop />
      {/* <Countries /> */}
      <Pages countries={currentCountry} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        // currentPage = {currentPage}
      />
    </body>
    </>
  );
}
