import { SEARCH } from "../actions/searchActions";

const initialSearchState = {
  searchInput: ''
}

export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        searchInput: action.payload
      }
    }

    default: {
      return state;
    }
  }
}