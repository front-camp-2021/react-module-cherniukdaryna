import { CLEAR_FILTER } from "../actions/checkboxAction";
import { GET_PRICE } from "../actions/priceAction"

const initialPriceState = {
    price: [0, 90000]
}

export const priceReducer = (state = initialPriceState, action) => {
  switch (action.type) {
    
    case GET_PRICE: {
      return {
        ...state,
        price: action.payload
      }
    }

    case CLEAR_FILTER: {
        return {
            price: [0, 90000]
        }
      }

    default: {
      return state;
    }
  }
}