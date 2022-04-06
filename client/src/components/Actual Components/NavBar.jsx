import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Paises</Link>
      </li>
      <li>
        <Link to="/activities">Actividades</Link>
      </li>
      <li>
        <Link to="/activities/addActivity">Añadir Actividad</Link>
      </li>
    </ul>
  );
}

export default NavBar;
