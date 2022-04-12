import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import {postAct} from '../../store/actions'
import './addActivity.css'
export default function AddActivity() {
  let navigate = useNavigate()
    let dispatch = useDispatch()
  const [actividad, setActividad] = useState(
    { name: '',
    difficulty:'',
    duration: '',
    season: '',
    countries:[]}
  );
  const [errores, setErrores] = useState({
    
   });
   const [submit, setSubmit] = useState(false)
  const [countries, setCountries] = useState([]);
  function getPaises() {
    axios.get("http://localhost:3001/api/countries").then((response) => {
      setCountries(response.data);
    });
  }
  useEffect(() => {
    getPaises();
  }, []);
useEffect(()=>{
 if(Object.keys(errores).length===0 && setSubmit){

 }
},[errores])
 const validate = (values)=>{
   const errores={}
   const RegExAlfa= /^[A-Za-z]+$/
   const RegExNum = /^[0-9]*$/
   const RegExInt =  /^[-+]?[1-9]\d*$/;
   
   if(!values.name){
     errores.name='Activity needs a name.'
   }else if(!RegExAlfa.test(values.name)){
    errores.name='This is NOT a valid name for the activity. Use ONLY alphabetic chracarters for this field'
}
   if(!values.difficulty){
    errores.difficulty='Activity needs a difficulty rating.'
  }else if(!RegExNum.test(values.difficulty)||!RegExInt.test(values.difficulty)){
       errores.difficulty='You have to use only NUMBERS(0-5) for this field'
  }else if(values.difficulty > 5){
    errores.difficulty='Ratings for the activity difficulty can only be out of 5'
}
  if(!values.duration){
    errores.duration='Activity needs a specific duration.'
  }else if(!RegExNum.test(values.duration)||!RegExInt.test(values.duration)){
    errores.duration='You have to use only NUMBERS (0-9) for this field'
}else if(values.duration >72){
  errores.difficulty='Activities can take up to 72 hs'
}
  return errores
 }
  function onInputChange(e) {
    e.preventDefault();
    setActividad({
      ...actividad,
      [e.target.name]: e.target.value,
    });
  }
  function onInputChangeN(e) {
    e.preventDefault();
    setActividad({
      ...actividad,
      [e.target.name]: Number(e.target.value)
    });
  }
  function onSubmit(e) {
    e.preventDefault();
   setErrores(validate(actividad));
   setSubmit(true) 
   if(Object.keys(errores).length===0 && setSubmit){
    axios.post( "http://localhost:3001/api/activities/addActivity", actividad)
    //navigate('/success')
    }; 
 
  }
  function handleChange(e){
    e.preventDefault()
   setActividad({
     ...actividad,
     countries: [...actividad.countries, e.target.value]
   })
  }
  function onSelectChange(e) {
    setActividad({
      ...actividad,
      season: e.target.value
    });
  }
  let counList = actividad.countries
  return (
   <div className="activity">
     <div>
   <form className="activity" onSubmit={e=> onSubmit(e)}>
      <select name="select" onChange={e => handleChange(e)}>
      <option value="" disabled selected>Country</option>
      {countries.map((country) => {
          return (
            <option value= {country.name}>
              {country.name}
            </option>
          );
        })}
      </select >
      
      {counList.map((selectedC) => {
          return (
           <>
            <p className="selectC">{selectedC}</p>
            </>
          );
        })}
      
      <p className="error">{errores.name}</p>
      <p>
        <label htmlFor="">Name: </label>
        <input
          onChange={e=> onInputChange(e)}
          name="name"
          type="text"
          placeholder="Name here..."
          value={actividad.name}
        />
      </p>
      <p className="error">{errores.difficulty}</p>
      <p>
        <label htmlFor="">Difficulty: </label>
        <input
          onChange={e=> onInputChangeN(e)}
          name="difficulty"
          type="number"
          placeholder="How hard is it?"
          value={actividad.difficulty}
        /> out of 5.
      </p>
      <p className="error">{errores.duration}</p>
      <p>
        <label htmlFor="">Duration: </label>
        <input
          onChange={e=> onInputChangeN(e)}
          name="duration"
          type="number"
          placeholder="How long does it take?"
          value={actividad.duration}
        /> hs.
      </p>
      <p>
        <label htmlFor="">Season: </label>
        <select name="season" onChange={ e=> onSelectChange(e)}>
        <option value="" disabled selected>Season</option>
        <option value="Summer">Summer</option>
        <option value="Winter">Winter</option>
        <option value="Fall">Fall</option>
        <option value="Spring">Spring</option>
        </select>
      </p>
      <p>
        <input className='botoncito' type="submit" />
      </p>
    </form>
    </div>
    </div>
  );
}

