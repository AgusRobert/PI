import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import'./pagination.css'
const Pagination = ({countriesPerPage,totalCountries,paginate, currentPage}) =>{
    
    const [pageXPages, setPagesXPages] = useState([])
    const pageN =[];
    
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageN.push(i);
    }
   let fistPage = pageN[0]
   let lastPage = pageN[pageN.length-1]
function handleSelect(e){
    e.preventDefault()
  paginate(e.target.value)
  }
function handleClick(e){
   
    if(currentPage>1){
        paginate(currentPage -1)}
    
}
function handleClick2(e){
   
    if(currentPage< pageN[pageN.length-1]){
        paginate(currentPage +1)}
}
    return( 
        <nav className="pagination">
         <a  onClick={()=>paginate(fistPage)} href="#!">First Page</a>
         <a  onClick={(e)=>handleClick()} href="#!">Prev</a>
            <span>{currentPage}</span>
            <select name = 'pages' onChange={e => handleSelect(e)}>
                {pageN.map((number)=>{
                    return (
                        <option  key={number}value = {number}>{number}</option>
                    // <a onClick={()=>paginate(number)} href="#!">{number}</a>
                  )  
                    })}
        </select>
            
        <a  onClick={(e)=>handleClick2(e)} href="#!">Next</a>
         <a  onClick={()=>paginate(lastPage)} href="#!">Last Page</a>
        </nav>
    )
}
export default Pagination


//        ,         ,       
// prev--[6, 7 ,8 ,9 ,10]--next
// cuando cambiar el slice Y cuando no se puede usar el prev y el next
// de tu array madre (prev)pageN[0] y (next)pageN[pageN.length-1]
// tu sub arrays (slice) pageS (prev)pageS[0] y (next)pageS[pageS.length-1] vas a saber si pasar al otro sub slice SIEMRPE Y CUANDO esas posiciones no sean = a (prev)pageN[0] y (next)pageN[pageN.length-1].