import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../store/actions";
import Activity from "../Actual Components/activity";
export default function Activities() {
  let activities = useSelector((state) => state.activities);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActivities());
  }, []);
  return (
    <div>
      {activities.map((activity,i) => {
        return (
          <Activity
            key={i}
            name={activity.name}
            difficulty={activity.difficulty}
            duration={activity.duration}
            season={activity.season}
          />
        );
      })}
    </div>
  );
}
