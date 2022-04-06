import React from "react";

const Pagination = ({countriesPerPage,totalCountries,paginate}) =>{
    const pageN =[];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageN.push(i);
    }
   let fistPage = pageN[0]
   let lastPage = pageN[pageN.length-1]
    return( 
        <nav>
         <a  onClick={()=>paginate(fistPage)} href="#!">First Page</a>
        
            <ul> 
            
                {pageN.map(number=>(
                    <li key= {number}>
                    <a onClick={()=>paginate(number)} href="#!">{number}</a>
                    </li>
                ))}
        
            </ul>
        
         <a  onClick={()=>paginate(lastPage)} href="#!">Last Page</a>
        </nav>
    )
}
export default Pagination