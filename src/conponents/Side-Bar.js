import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_FILTER } from '../actions/checkboxAction';
import FiltersList from './FiltersList';
import arrowBack from './img/4829860_arrow_back_left_icon.svg'

function SideBar() {
  const dispatch = useDispatch();

  function clearHandler(event) {
    dispatch({
      type: CLEAR_FILTER
    })
  } 

  return (
    <section className="filters-default">

      <div className="header-filters">
        <b className="header-filters__name">Filtres</b>
        <a className="header-filters__back" href="/#">
          <img className="header-filters__image-back-arrow" src={arrowBack} alt="" />
        </a>
      </div>

      <div className="filters-navigation">
        <FiltersList />
      </div>
      <button
        className="filters-default__buttonn-clear-all"
        onClick={clearHandler}
      >
        Clear all filters
      </button>
    </section>
  );
}

export default SideBar;