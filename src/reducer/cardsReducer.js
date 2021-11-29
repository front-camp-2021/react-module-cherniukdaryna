import { GET_CARDS } from "../actions/cardsActions";
import { CHANGE_FAVORITE_STATUS } from "../actions/favoriteActions";

const initialState = {
  cardsList: [],
  isFavorite: []
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cardsList: action.payload
      }
    }

    case CHANGE_FAVORITE_STATUS: {
      return state.isFavorite.includes(action.payload)
        ? {
          ...state,
          isFavorite: state.isFavorite.filter(value => value !== action.payload)
        } :
        {
          ...state,
          isFavorite: [...state.isFavorite, action.payload]
        }
    }

    default: {
      return state;
    }
  }
}