import { useDispatch } from "react-redux";
import {filterContinent} from '../../store/actions' 
import { Africa, South_America, North_America , Asia, Europe, Oceania , } from "../../constants/sort";
import'./order.css'

export default function ContinentFilter(){
    let dispatch = useDispatch()

    function onSelectChange(e) {
      e.preventDefault()
      dispatch(filterContinent(e.target.value));
      }

      return (
        <div className="order"><select name="select" onChange={onSelectChange}>
          <option value='' disabled selected>Continent</option>
          <option value={North_America}>North America</option>
          <option value={South_America}>South America</option>
          <option value={Africa}>Africa</option>
          <option value={Asia}>Asia</option>
          <option value={Europe}>Europe</option>
          <option value={Oceania}>Oceania</option>
        </select></div>
      );
}