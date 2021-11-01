import { CLEAR_FILTER, SET_FILTER } from "../actions/checkboxAction";

const activeFiltersState = {
  brand: [],
  category: []
}

export const activeFiltersReducer = (state = activeFiltersState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      const { type, name } = action.payload
      return state[type].includes(name)
        ? {
          ...state,
          [type]: state[type].filter(value => value !== name)
        }
        : {
          ...state,
          [type]: [...state[type], name]
        }
    }

    case CLEAR_FILTER: {
      return activeFiltersState;
    }

    default: {
      return state;
    }
  }
}