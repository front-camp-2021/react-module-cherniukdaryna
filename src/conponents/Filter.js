import {
  useDispatch,
  useSelector
} from "react-redux";
import { SET_FILTER } from "../actions/checkboxAction";

function Filter(props) {
  const { filtersListItem } = props;
  const dispath = useDispatch();
  const checkedLength = useSelector(state => state.activeFilters[props.type].length);
  let checked;

  function filterHandler(e) {
    dispath({
      type: SET_FILTER,
      payload: {
        name: e.target.name.toLowerCase().replace(' ', '_'),
        type: props.type
      }
    });
  }

  if (checkedLength === 0){
    checked = '';
  }

  return (
    <form
      className="second-filtres-list__form"
      action=""
      method="GET"
      name="category"
    >
      <div>
        <input
          className="second-filtres-list__checkbox-input"
          type="checkbox"
          checked={checked}
          id={filtersListItem}
          name={filtersListItem}
          onChange={filterHandler}
        />
        <label
          className="second-filtres-list__checkbox-input-label"
          htmlFor={filtersListItem}>
          {filtersListItem}
        </label>
        <br />
      </div>
    </form>
  )
}

export default Filter;
