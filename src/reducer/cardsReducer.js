import { GET_CARDS } from "../actions/cardsActions";

const initialState = {
  cardsList: []
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cardsList: action.payload
      }
    }

    default: {
      return state;
    }
  }
}