import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards, getCards } from '../actions/cardsActions';
import Card from "./Card";

function CardsList() {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.cards.cardsList);
  const pages = useSelector(state => state.pagination);

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

  const filteredCardsList = useSelector((state) => {
    return Object.entries(state.activeFilters).reduce((filteredList, filter) => {
      return filter[1].length ? filteredList.filter(value => filterFn(value, filter)) : filteredList
    }, cardsList)
  })

  useEffect(() => {
    dispatch(getAllCards());
  }, [])

  return (
    <div className="catalog">
      {
        filteredCardsList.slice(pages.currentPage*9 - 9, pages.currentPage*9).map(card =>
          <Card
            dataProducts={card}
            key={card.id}
          />
        )
      }
    </div>
  )
}

export default CardsList;