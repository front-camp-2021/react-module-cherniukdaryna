import Heart from './img/heart.svg'
import Glass from './img/4801315_glass_magnifier_magnifying_search_searching_icon.svg'

function Input() {
    return (
        <>
            <div className="results">
                <span className="results__number">7,618 results found</span> 

                <button className="results__like-butn">
                    <img className="results__like-image" src={Heart} alt=""/>
                </button>
            </div>

            <div className="search">
                <input className="search__input" type="search" id="search" placeholder="  Search"/>

                <button className="search__btn-glass"> 
                    <img className="search__image-search" src={Glass} alt=""/> 
                </button>
            </div>
        </>
    )
}

export default Input;
