import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards, getCards } from '../actions/cardsActions';
import { FAVORITES_CARDS_LIST } from '../actions/favoriteActions';
import { cardsSelector } from '../selectors/cardSelectors';
import Card from "./Card";

function CardsList({ cardsType }) {
  const dispatch = useDispatch();
  const cardsList = useSelector(state => state.cards.cardsList);
  const pages = useSelector(state => state.pagination);
  const inputValue = useSelector(state => state.search.searchInput);
  const fav = useSelector(state => state.cards.isFavorite);

  console.log(fav)

  const filterFn = (value, [filterType, filterValues]) => {
    // switch (filterType) {
    //   case 'brand':
    //     return filterValues.includes(value['brand'])
    //   case 'category':
    //     return filterValues.includes(value['category'])
    //   default:
    //     break;
    // }
    return filterValues.includes(value[filterType])
  }

  let filteredCardsList = useSelector((state) => {
    return Object.entries(state.activeFilters).reduce((filteredList, filter) => {
      return filter[1].length ? filteredList.filter(value => filterFn(value, filter)) : filteredList
    }, cardsList)
  });

  useEffect(() => {
    dispatch(getAllCards());
  }, [])

  let favoriteList = cardsList.filter(card => fav.includes(card.id));
  let resultCardsList = cardsType === 'favorites'
    ? favoriteList
    : filteredCardsList
      .slice(pages.currentPage * 9 - 9, pages.currentPage * 9)
      .filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase(), 0));

  return (
    <>
      {
        resultCardsList
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

export default CardsList;