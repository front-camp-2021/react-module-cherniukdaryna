import Star from './img/star.svg'
import Heart from './img/heart.svg'
import Basket from './img/basket.svg'
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_FAVORITE_STATUS, FAVORITES_CARDS_LIST } from '../actions/favoriteActions';
import { cardsSelector } from '../selectors/cardSelectors';

function Card(props) {
  const { dataProducts } = props;
  const dispatch = useDispatch();

  function favoriteStatusHendler() {
    dispatch({
      type: CHANGE_FAVORITE_STATUS,
      payload: dataProducts.id
    })
  }
  

  return (
    <div className="product-card" id={dataProducts.id}>
      <div className="image">
        <img className="image__goods" src={dataProducts.images[0]} alt="" />
      </div>

      <div className="rating-price">
        <div className="rating">
          {dataProducts.rating}
          <img className="rating__image-star" src={Star} alt="" />
        </div>

        <p className="price">{dataProducts.price}</p>
      </div>

      <p className="product-card__information">{dataProducts.title}</p>

      <div className="product-card-buttons">
        <button
          className="product-card-buttons__wishlist"
          onClick={favoriteStatusHendler}
        >
          <img className="product-card-buttons__image-heart" src={Heart} alt="" />
          <span className="product-card-buttons__name">WISHLIST</span>
        </button><button className="product-card-buttons__add">
          <img className="product-card-buttons__image-basket" src={Basket} alt="" />
          <span className="product-card-buttons__name">ADD TO CART</span>
        </button>
      </div>
    </div>
  )
}

export default Card;
