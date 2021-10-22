import { GET_PAGINATION, TO_NEXT, TO_PREV } from "../actions/paginationActions";

const initialPaginationState = {
  totalPage: 20,
  currentPage: 1
}

export const paginationReducer = (state = initialPaginationState, action) => {
  switch (action.type) {
    
    case GET_PAGINATION: {
      return {
        ...state,
        currentPage: action.payload
      }
    }

    case TO_NEXT: {
      return state.currentPage === 20 ? 
      { ...state,
        currentPage: 20
      }
      : {
        ...state,
        currentPage: (state.currentPage + 1)
      }
    }

    case TO_PREV: {
      return state.currentPage === 1 ? 
      { ...state,
        currentPage: 1
      }
      : {
        ...state,
        currentPage: (state.currentPage - 1)
      }
    }

    default: {
      return state;
    }
  }
}