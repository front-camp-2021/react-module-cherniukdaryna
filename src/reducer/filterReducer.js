import { GET_BRAND_FILTERS, GET_CATEGORY_FILTERS } from "../actions/filtersActions";

const initialStateCategory = {
  categoryFiltersList: []
}

export const categoryFiltersReducer = (state = initialStateCategory, action) => {
  switch (action.type) {
    case GET_CATEGORY_FILTERS: {
      return {
        ...state,
        categoryFiltersList: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

const initialStateBrand = {
  brandFiltersList: []
}

export const brandFiltersReducer = (state = initialStateBrand, action) => {
  switch (action.type) {
    case GET_BRAND_FILTERS: {
      return {
        ...state,
        brandFiltersList: action.payload
      }
    }

    default: {
      return state;
    }
  }
}