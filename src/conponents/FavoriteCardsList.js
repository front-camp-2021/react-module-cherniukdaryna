import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from '../actions/cardsActions';
import Card from "./Card";

function FavoritesCardList() {
  const dispatch = useDispatch();
  const cardsList = useSelector(state => state.cards.cardsList);
  const pages = useSelector(state => state.pagination);
  const favoritesList = useSelector(state => state.favoriteStatues.isFavorite);

  useEffect(() => {
    dispatch(getAllCards());
  }, [])

  const list = cardsList.filter(card => favoritesList.includes(card.id)  );
  console.log(favoritesList)

  return (
    <>
      {
        list
          .slice(pages.currentPage * 9 - 9, pages.currentPage * 9)
          .map(card =>
            <Card
              dataProducts={card}
              key={card.id}
            />
          )
      }
    </>
  )
}

export default FavoritesCardList;