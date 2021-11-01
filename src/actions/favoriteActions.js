export const CHANGE_FAVORITE_STATUS = 'CHANGE_FAVORITE_STATUS';
export const FAVORITES_CARDS_LIST = 'FAVORITES_CARDS_LIST';

export const favoriteAction = (payload) => {
  return {
    type: CHANGE_FAVORITE_STATUS,
    payload
  }
}

export const favoriteCardsListAction = (payload) => {
  return {
    type: FAVORITES_CARDS_LIST,
    payload
  }
}