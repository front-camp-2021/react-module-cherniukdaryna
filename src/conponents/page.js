import { useDispatch } from "react-redux";
import { GET_PAGINATION } from "../actions/paginationActions";

function Page(props) {
  const { page, active } = props;
  const dispatch = useDispatch();

  function paginationHadler(event) {
    dispatch({
      type: GET_PAGINATION,
      payload: +event.target.name
    })
  }

  return (
    <>
      <a
        className="links-list__link"
        id={active}
        href="/#top"
        name={page}
        onClick={paginationHadler}
      >
        {page}
      </a>
    </>
  )
}

export default Page;