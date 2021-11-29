export const GET_PAGINATION = 'GET_PAGINATION';
export const TO_NEXT = 'TO_NEXT';
export const TO_PREV = 'TO_PREV';

export const pagination = (payload) => {
  return {
    type: GET_PAGINATION,
    payload
  }
}

export const paginationToNext = () => {
  return {
    type: TO_NEXT
  }
}

export const paginationToPrev = () => {
  return {
    type: TO_PREV
  }
}