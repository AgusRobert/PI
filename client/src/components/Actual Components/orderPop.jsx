import { POB_DES, POB_ASC } from "../../constants/sort";
import { useDispatch } from "react-redux";
import { sortByPop } from "../../store/actions";

export default function OrderPop() {
  const dispatch = useDispatch();
    

  function onSelectChange(e) {
    dispatch(sortByPop(e.target.value));
  }
  return (
    <select name="select" onChange={onSelectChange}>
      <option value={POB_ASC}>Most populated</option>
      <option value={POB_DES}>Least populated</option>
    </select>
  );
}
