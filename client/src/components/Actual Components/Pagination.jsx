import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Pagination = ({countriesPerPage,totalCountries,paginate, currentPage}) =>{
    
    const [pageXPages, setPagesXPages] = useState([])
    const pageN =[];
    
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageN.push(i);
    }
   let fistPage = pageN[0]
   let lastPage = pageN[pageN.length-1]
//    let prev =  (pageN) => setPagesXPages(pageN)
//    let next = () => {
   
//    let nextP = ()=>{
//         let pageS = [] 
//         let n = Math.floor(currentPage/5) 
//         let pagina = currentPage
//         paginate(pagina+1)
//         if(currentPage >= 5){
//            pageS =  pageN.slice(0,5) ;
//            return pageS   
//         } else{
//             pageS =  pageN.slice(n*5+1,n*5+5) 
//         } 
//    }
  
//    let prevP = ()=>{
//     let pageS = [] 
//     let n = Math.floor(currentPage/5) 
//     let pagina = currentPage
//     paginate(pagina-1)
//     if(currentPage = 1){
//        return paginate
//     }
//     if(currentPage >= 5){
//        pageS =  pageN.slice(0,5) ;
//        return pageS   
//     } else{
//         pageS =  pageN.slice(n*5+1,n*5+5) 
//     } 

function handleSelect(e){
    e.preventDefault()
  paginate(e.target.value)
  }
  
   
    return( 
        <nav>
         <a  onClick={()=>paginate(fistPage)} href="#!">First Page</a>
        
            
            <select name = 'pages' onChange={e => handleSelect(e)}>
                {pageN.map((number)=>{
                    return (
                        <option value = {number}>{number}</option>
                    // <a onClick={()=>paginate(number)} href="#!">{number}</a>
                  )  
                    })}
        </select>
            
        
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