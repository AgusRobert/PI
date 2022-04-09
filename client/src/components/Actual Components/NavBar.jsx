import React from "react";
import { Link } from "react-router-dom";
import './navBar.css'
function NavBar() {
  return (
    <div className="topnav">
     <a className="active" href="http://localhost:3000/Home">Countries</a> 
      {/* <li>
        <Link to="/activities">Actividades</Link>
      </li> */}
       <a href="http://localhost:3000/activities/addActivity">Add Activity</a> 
      </div>
  );
}

export default NavBar;
