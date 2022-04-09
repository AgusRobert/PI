import {useState} from 'react'
import { searchCountries } from '../../store/actions';
import { useDispatch } from 'react-redux';
import "./searchBar.css"
export default function SearchBar () {
    
    const [search,setSearch] = useState ('')
    let dispatch = useDispatch()
    function onSubmit(e){
      e.preventDefault();
      dispatch (searchCountries(search))
    }
    function onInputChange(e){
        e.preventDefault()
        setSearch (e.target.value)
    }
    return <div className='search'>
        <form onSubmit={onSubmit}>
            
            <input  placeholder="Search a country..." type="text" onChange={onInputChange} value = {search} />
           <button type="submit" value="Search">Search</button> 
        </form>
        
    </div>
}