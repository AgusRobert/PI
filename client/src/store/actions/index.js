import axios from "axios";
export const FETCH_COUNTRIES = "FETCH_COUNTRIES"
export const SEARCH_COUNTRIES ='SEARCH_COUNTRIES'
export const SORT_BY_POP='SORT_BY_POP'
export const SORT_AZ='SORT_AZ'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES'
export const POST_ACT= 'POST_ACT'
export function fetchCountries() {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/countries/").then((countries) => {
      dispatch({
        type: FETCH_COUNTRIES,
        payload: countries.data
      });
    })
    .catch((error)=>{
       console.log(error)
    })
  };
}

export function fetchActivities() {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/activities/").then((activities) => {
      dispatch({
        type: FETCH_ACTIVITIES,
        payload: activities.data
      });
    })
    .catch((error)=>{
       console.log(error)
    })
  };
}


export function searchCountries(search) {
 
  return function (dispatch) {
        axios.get('http://localhost:3001/api/countries?name=' + search)
        .then((countries) => {
          dispatch({
            type: SEARCH_COUNTRIES,
            payload: countries.data
          });
        })
        .catch((error)=>{
           console.log(error)
        })
      };
}

export function filterContinent(continent) {
  return function (dispatch) {
      axios.get('http://localhost:3001/api/countries?continent=' + continent)
      .then((countries) => {
        dispatch({
          type: FILTER_CONTINENT,
          payload: countries.data
        });
      })
      .catch((error)=>{
         console.log(error)
      })
    };
}

export function sortByPop(order){
  return {
      type: SORT_BY_POP,
      payload: order
  }
}

export function sortAz(order){
  return {
      type: SORT_AZ,
      payload: order
  }
}
// export function postAct(payload){
//    return async(dispatch)=>{
//      const ACT = await axios.post("http://localhost:3001/api/activities/addActivity", payload)
//      return ACT;
//    }
// }
