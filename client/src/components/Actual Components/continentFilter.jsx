import { useDispatch } from "react-redux";
import {filterContinent} from '../../store/actions' 
import { Africa, South_America, North_America , Asia, Europe, Oceania , } from "../../constants/sort";

export default function ContinentFilter(){
    let dispatch = useDispatch()

    function onSelectChange(e) {
      e.preventDefault()
      dispatch(filterContinent(e.target.value));
      }

      return (
        <select name="select" onChange={onSelectChange}>
          <option value={North_America}>North America</option>
          <option value={South_America}>South America</option>
          <option value={Africa}>Africa</option>
          <option value={Asia}>Asia</option>
          <option value={Europe}>Europe</option>
          <option value={Oceania}>Oceania</option>
        </select>
      );
}