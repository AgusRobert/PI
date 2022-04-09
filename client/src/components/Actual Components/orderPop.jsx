import { POB_DES, POB_ASC } from "../../constants/sort";
import { useDispatch } from "react-redux";
import { sortByPop } from "../../store/actions";
import'./order.css'
export default function OrderPop() {
  const dispatch = useDispatch();
    

  function onSelectChange(e) {
    dispatch(sortByPop(e.target.value));
  }
  return (
   <div className="order">
   <select name="select" onChange={onSelectChange}>
     <option value='' disabled selected>Population</option>
      <option value={POB_ASC}>Most populated</option>
      <option value={POB_DES}>Least populated</option>
    </select>
    </div>
  );
}
