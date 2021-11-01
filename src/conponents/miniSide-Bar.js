import { useDispatch } from 'react-redux';
import { CLEAR_FILTER } from '../actions/checkboxAction';
import FiltersList from './FiltersList';
import menu from './img/2561466_menu_icon.svg'

function MiniSideBar() {
  const dispatch = useDispatch();

  function clearHandler(event) {
    dispatch({
      type: CLEAR_FILTER
    })
  }

  return (
    <div class="sidebar-for-720">

      <input class="sidebar-for-720__checkbox--disabled" id="menu__burger" type="checkbox" />
      <label class="sidebar-for-720__label" for="menu__burger">
        <img class="sidebar-for-720__burger-image" src={menu} alt=""/>
      </label>

      <div class="filters-navigation-max-720">
        <FiltersList />

        <button
        className="filters-default__buttonn-clear-all"
        onClick={clearHandler}
      >
        Clear all filters
      </button>
      </div>
      
    </div>
  );
}

export default MiniSideBar;