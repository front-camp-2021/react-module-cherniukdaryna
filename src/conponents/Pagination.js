import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PAGINATION, TO_NEXT, TO_PREV } from '../actions/paginationActions';
import arrowForward from './img/2931159_arrow_forward_right_move_navigation_icon.svg';
import arrowBack from './img/2931162_arrow_back_left_direction_move_icon.svg';
import Page from './page';

function Pagination() {
  const pages = useSelector(state => state.pagination);
  const dispatch = useDispatch();

  let pagesArray = [];

  for (let i = 0; i < pages.totalPage; i++) {
    pagesArray.push(i + 1);
  }

  function toNextHandler() {
    dispatch({
      type: TO_NEXT
    })
  }

  function toPrevHandler() {
    dispatch({
      type: TO_PREV
    })
  }


  return (
    <footer className="footer">
      <a
        className="footer__arrow-back-left"
        href="/#"
        onClick={toPrevHandler}
      >
        <img
          className="footer__image-arrow-back-left"
          src={arrowBack}
          alt=""
        />
      </a>

      <div className="links-list">
        {pagesArray.map((item, index) =>

          <Page
            page={item}
            key={index}
            active={pages.currentPage == item ? 'active' : ""}
          />
        )}
      </div>

      <a
        className="footer__arrow-forward-right"
        href="/#"
        onClick={toNextHandler}
      >
        <img
          className="footer__image-arrow-forward-right"
          src={arrowForward}
          alt=""
        />
      </a>
    </footer>
  )
}

export default Pagination;