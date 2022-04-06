import { Link } from "react-router-dom";

export default function Activity({ name,difficulty,duration,season}) {

  return (
    <div>
      <Link to='/activities' >
        <h2>{name}</h2>
        <h3>{difficulty}</h3>
        <h3>{duration}</h3>
        <h3>{season}</h3>
      </Link>
    </div>
  );
}