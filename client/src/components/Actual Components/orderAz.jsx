import { ALFA_ASC, ALFA_DES } from "../../constants/sort";
import { useDispatch } from "react-redux";
import { sortAz } from "../../store/actions";
import'./order.css'
export default function OrderAz() {
   let dispatch = useDispatch()
  //  function handleActions(e, action) {
  //   dispatch(action(e.target.value));
  // }
  
  function onSelectChange(e) {
    dispatch(sortAz(e.target.value));
  }
  return (
   <div className="order"> <select name="select" onChange={onSelectChange}>
      <option value='' disabled selected>Alphabetical order</option>
      <option value={ALFA_ASC}>A-Z</option>
      <option value={ALFA_DES}>Z-A</option>
    </select></div>
  );
}

// continente filtro aparte
// ordenamiento de A-Z y poblacion
//2 grados de filtrado
// filtro cruzado de ordenamiento con continente
