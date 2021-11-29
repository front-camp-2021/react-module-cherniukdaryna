import Heart from './img/heart.svg'
import Glass from './img/4801315_glass_magnifier_magnifying_search_searching_icon.svg'
import { debounce } from '../helpers/debounce'
import { useDispatch } from 'react-redux'
import { SEARCH } from '../actions/searchActions';
import { NavLink } from 'react-router-dom';

function Input() {
  const dispatch = useDispatch();

  function searchHendler(event) {
    dispatch({
      type: SEARCH,
      payload: event.target.value
    })
  }

  searchHendler = debounce(searchHendler, 500);

  return (
    <>
      <div className="results">
        <span className="results__number">7,618 results found</span>

        <NavLink to='/favorites'>
          <button className="results__like-butn">
            <img className="results__like-image" src={Heart} alt="" />
          </button>
        </NavLink>
      </div>

      <div className="search">
        <input
          className="search__input"
          type="search"
          id="search"
          placeholder="  Search"
          onChange={searchHendler}
        />

        <button className="search__btn-glass">
          <img className="search__image-search" src={Glass} alt="" />
        </button>
      </div>
    </>
  )
}

export default Input;
