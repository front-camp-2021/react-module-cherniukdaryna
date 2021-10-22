import axios from 'axios';
export const GET_CARDS = 'GET_CARDS';

export const getCards = (cards) => {
  return {
    type: GET_CARDS,
    payload: cards
  }
}

export const getAllCards = () => {
  return (dispath) => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        dispath (getCards(response.data))
      })
  }
}