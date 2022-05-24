import { useDispatch } from "react-redux";
import {BOTON } from "../../constants/sort";
import { minMax } from "../../store/actions";
export default function Botoncito(){
 let dispatch = useDispatch();
 function onClickP(e) {
    dispatch(minMax(BOTON));
  }
    return(
        <button onClick={e =>{onClickP(e)}}> MIN MAX POP</button>
    )
}



// solo tengo que traer 2 paises, min y el max
// algo con el filteredcountries xq queremos q funcione con orden y filtr
// se me ocurre copia del filterC, hacer dos copias, filtrar el min y el max, y unirlo o pushear uno en el otro y devolver ..state y nuevo filterC
//necesito una accion que me lleve un payload al reducer que va a hacer esto.