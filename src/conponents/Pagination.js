import arrowForward from './img/2931159_arrow_forward_right_move_navigation_icon.svg';
import arrowBack from './img/2931162_arrow_back_left_direction_move_icon.svg';

function Pagination() {
    return (
        <footer className="footer">    
        <a className="footer__arrow-back-left" href="/#"> 
          <img className="footer__image-arrow-back-left" src={arrowBack} alt=""/>
        </a>

        <div className="links-list">
          <a className="links-list__link" href="/#">1</a>
          <a className="links-list__link" href="/#">2</a>
          <a className="links-list__link" href="/#">3</a>
          <a className="links-list__link" href="/#">4</a>
          <a className="links-list__link" href="/#">5</a>
          <a className="links-list__link" href="/#">6</a>
          <a className="links-list__link" href="/#">7</a>
          <a className="links-list__link" href="/#">8</a>
          <a className="links-list__link" href="/#">9</a>
          <a className="links-list__link" href="/#">10</a>    
        </div>

        <a className="footer__arrow-forward-right" href="/#"> 
          <img className="footer__image-arrow-forward-right" src={arrowForward} alt=""/>
        </a> 
    </footer>
    )
}

export default Pagination;