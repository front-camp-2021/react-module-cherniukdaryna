import logo from './img/logo.png'
import home from './img/3844435_home_house_icon.svg'
import arrow from './img/4829859_arrow_next_right_icon.svg'

function Header() {
    return (
      <>
      <header className="header">
        <img className="header__logo-header" src={logo} alt=""/> 
        <a className="header__title" href="/#">Online Store</a>         
    </header>
  
    <nav className="top-navigation">
        <img className="top-navigation__image-home" src={home} alt=""/>
        
        <img className="top-navigation__arrow" src={arrow} alt=""/> 
  
        <a className="top-navigation__link" href="/#">eCommerce</a>
  
        <img className="top-navigation__arrow" src={arrow} alt=""/>
  
        <a className="top-navigation__link" href="/#">Electronics</a> 
    </nav>
      </>
    );
}

export default Header;