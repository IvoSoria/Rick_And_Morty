import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions.tips";

const initialState = {
  idUser: 0,
  myFavorites: [] ,
  allCharactersFav: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { 
        ...state,
        myFavorites: action.payload, 
        allCharacters: action.payload 
    };
    case REMOVE_FAV:
      return {
        ...state, myFavorites: action.payload 
    };      
    case FILTER:
      const allCharactersFavFiltered = state.allCharactersFav.filter(character => character.gender === action.payload)
      return {
        ...state,
        myFavorites: 
          action.payload === 'allCharacters'
          ? [...state.allCharactersFav]
          : allCharactersFavFiltered
    }
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav]
      return {
        ...state,
        myFavorites:
          action.payload === 'A'
          ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
          : allCharactersFavCopy.sort((a, b) => b.id - a.id)
    }
    case "RESET" :
      return { 
        ...state,
        myFavorites: state.allCharactersFav
    }
    case "LOGIN" :
      return {
        ...state,
        idUser: action.payload
      }

    default:
      return {...state };
  }
}

export default reducer;
