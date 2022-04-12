import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/Main Pages/countryDetail";
import AddActivity from "./components/Main Pages/addActivity";
import NavBar from "./components/Actual Components/NavBar";
import Activities from "./components/Main Pages/Activities";
import Home from "./components/Main Pages/Home";
import Landing from "./components/Main Pages/Landing";
import Success from "./components/Main Pages/SuccessAct";
function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route exact path="/" element={<Landing />}></Route>
        <Route path="/Home" element={ <><NavBar /> <Home /></>}></Route>
        <Route path="/:idCountry" element={<> <NavBar /><CountryDetail /></>}></Route>
        <Route
          exact
          path="/activities/addActivity"
          element={ <><NavBar /><AddActivity /></>}
        ></Route>
        <Route path="/activities" element={<><NavBar /><Activities /></>}></Route>
        <Route exact path="/success" element={<><NavBar /><Success/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
