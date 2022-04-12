import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../store/actions";
import Activity from "../Actual Components/activity";
import './Activities.css'
export default function Activities() {
  let activities = useSelector((state) => state.activities);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActivities());
  }, []);
  return (
    <div className="activities">
      {activities.map((activity,i) => {
        return (
          <div className="activities_comp">
          <Activity
            key={i}
            name={activity.name}
            difficulty= {activity.difficulty}
            duration={activity.duration}
            season={activity.season}
            countries={activity.countries}
          /></div>
        );
      })}
    </div>
  );
}
