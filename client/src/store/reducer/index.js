import { FETCH_COUNTRIES, SEARCH_COUNTRIES, SORT_AZ,SORT_BY_POP,FILTER_CONTINENT, POST_ACT } from "../actions";
import { POB_DES, ALFA_ASC} from "../../constants/sort";
const initialState = {
  countries: [],
  filteredCountries: [],
  activities:[],
  order:'asc',
  tipoDeOrder:'Alfabetico'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };
      case FILTER_CONTINENT:
        return {
          ...state,
          filteredCountries: action.payload,
        };
      case SORT_BY_POP:
        let orderCountriesPop = [...state.filteredCountries];
        orderCountriesPop = orderCountriesPop.sort((a,b) => {
          if (a.population < b.population) {
            return  action.payload === POB_DES ? -1:1
          }
          if (a.population > b.population) {
            return   action.payload === POB_DES ? 1:-1
          }
          return 0;
        });
        return {
          ...state,
          filteredCountries: orderCountriesPop,
        };
      case SORT_AZ:
        let orderCountriesAz = [...state.filteredCountries];
        orderCountriesAz = orderCountriesAz.sort((a,b) => {
          if (a.name < b.name) {
            return  action.payload === ALFA_ASC ? -1:1
          }
          if (a.name > b.name) {
            return   action.payload === ALFA_ASC ? 1:-1
          }
          return 0;
        });
      return {
        ...state,
        order: action.payload,
        filteredCountries: orderCountriesAz,
      };
     
    default:
      return state;
  }
}
