export const SET_FILTER = 'SET_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const activeBrand = (payload) => {
  return {
    type: SET_FILTER,
    payload
  }
}

export const clearAllFilters = () => {
  return {
    type: CLEAR_FILTER
  }
}

