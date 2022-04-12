import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {filterActividad} from '../../store/actions' 
import'./order.css'
export default function ActivityFilter() {
  let dispatch = useDispatch();
  const [activities, setActivities] = useState([]);
  function getActivities() {
    axios.get("http://localhost:3001/api/activities").then((response) => {
      setActivities(response.data);
    });
  }
  useEffect(() => {
    getActivities();
  }, []);
  function onSelectChange(e) {
    e.preventDefault();
    dispatch(filterActividad(e.target.value));
  }

  return (
    <div className="order">
      <select name="select" onChange={onSelectChange}>
        <option value="" disabled selected>
          Activity
        </option>
        {activities.map((activity) => {
          return <option key={activity.id}value={activity.id}>{activity.name}</option>;
        })}
      </select>
    </div>
  );
}
