import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrandFilters, getAllCategoryFilters } from '../actions/filtersActions';
import Filter from './Filter';
import Line from './img/Divider.png'

function FiltersList() {
  const dispatch = useDispatch();
  const categoryFilters = useSelector(state => state.categoryFilters.categoryFiltersList);
  const brandFilters = useSelector(state => state.brandFilters.brandFiltersList);
 

  useEffect(() => {
    dispatch(getAllCategoryFilters());
    dispatch(getAllBrandFilters());
  }, [])

  return (
    <>
      <div className="second-filtres-list" >
        <p className="second-filtres-list__name--bold"><b>Categories</b></p>
        {
          categoryFilters.map((item, index) =>
            <Filter
              filtersListItem={item}
              type={'category'}
              key={index}
            />
          )
        }
        <img className="filters-navigation__line" src={Line} alt="" /> <br />
      </div>

      <div className="second-filtres-list">
        <p className="second-filtres-list__name--bold"><b>Brand</b></p>
        {
          brandFilters.map((item, index) =>
            <Filter
              filtersListItem={item}
              type={'brand'}
              key={index}
            />
          )
        }
      </div>
    </>
  )
}

export default FiltersList;