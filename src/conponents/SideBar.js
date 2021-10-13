import { useState } from 'react';
import arrowBack from './img/4829860_arrow_back_left_icon.svg'
import Line from './img/Divider.png'

const FILTERS_LIST = [
    {
        id: 1,
        listName: "Categories",
        list: [
        "Monitors",
        "Laptops",
        "Video cards",
        "Gaming keyboards",
        "Computer mouse",
        "SSD",
        "Sound cards",
        "RAM"
        ]
    },
    {
        id: 2,
        listName: "Brands",
        list: [
            "Asus",
        "Acer",
        "Apple",
        "Dell",
        "Dynamode",
        "Gigabyte",
        "Kingston",
        "Lenovo",
        "Logitech",
        "MSI",
        "BenQ",
        "A4Tech"
        ]
    }
]


function Sidebar() {
    const [filtersListItem, setFilterItem] = useState(FILTERS_LIST);

    return (
        <section className="filters-default">

            <div className="header-filters">
            <b className="header-filters__name">Filtres</b> 
            <a className="header-filters__back" href="/#">
                <img className="header-filters__image-back-arrow" src={arrowBack} alt="" />
            </a> 
            </div>

            <div className="filters-navigation">
                    {filtersListItem.map((item) =>
                        <div className="second-filtres-list" key={item.id}>
                            <p className="second-filtres-list__name--bold"><b>{item.listName}</b></p>
                            
                                {item.list.map((elem, index) => 
                                    <form className="second-filtres-list__form" action="" method="GET" name="category" key={index}>
                                        <div>
                                            <input className="first-filtres-list__checkbox-input" type="checkbox" id={elem} name="categorie" />
                                            <label className="first-filtres-list__checkbox-input-label" htmlFor={elem}>  {elem}</label><br />
                                        </div>
                                    </form>
                                )}
                            
                            <img className="filters-navigation__line" src={Line} alt=""/><br />
                        </div>
                    )}
            </div>
            <button className="filters-default__buttonn-clear-all">Clear all filters</button>
        </section>
    );
}

export default Sidebar;
