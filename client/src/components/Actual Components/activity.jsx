import './activity.css'
export default function Activity({ name,difficulty,duration,season}) {

  return (
    <div className='activ'>
        <h3>{name}</h3>
        <h4> Difficulty: {difficulty} /5</h4>
        <h4>Duration: {duration} HS</h4>
        <h4>Season: {season}</h4>
    </div>
  );
}