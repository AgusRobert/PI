import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/Main Pages/countryDetail";
import AddActivity from "./components/Main Pages/addActivity";
import NavBar from "./components/Actual Components/NavBar";
import Activities from "./components/Main Pages/Activities";
import Home from "./components/Main Pages/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:idCountry" element={<CountryDetail />}></Route>
        <Route
          exact
          path="/activities/addActivity"
          element={<AddActivity />}
        ></Route>
        <Route path="/activities" element={<Activities />}></Route>
      </Routes>
    </div>
  );
}

export default App;
