import { Link } from "react-router-dom";

export default function Country({id, name, img,continent,capital,subregion,area,population}) {
  
    let propPopulaiton= population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div>
      <Link to={`/${id}`} >
        <h2>{name}</h2>
        <img src={img} alt="Flag" />
        <h4>Population :{propPopulaiton}</h4>
      </Link>
    </div>
  );
}
