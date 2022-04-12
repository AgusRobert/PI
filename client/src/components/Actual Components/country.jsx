import { Link } from "react-router-dom";
import'./pages.css'
export default function Country({id, name, img,continent,capital,subregion,area,population}) {
  
    let propPopulaiton= population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className="country">
      <Link  to={`/${id}`} >
        <img src={img} alt="Flag" />
        <h2>{name}</h2>
        <h4>Population :{propPopulaiton}</h4>
      </Link>
    </div>
  );
}
