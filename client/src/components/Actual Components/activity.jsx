import { Link } from "react-router-dom";

export default function Activity({ name,difficulty,duration,season}) {

  return (
    <div>
     
        <h2>{name}</h2>
        <h3> Difficulty: {difficulty}</h3>
        <h3>Duration: {duration}</h3>
        <h3>Season: {season}</h3>
      
    </div>
  );
}