import { useState } from 'react';
import Star from './img/star.svg'
import Heart from './img/heart.svg'
import Basket from './img/basket.svg'

const CARD_DATA = [
    {
        id: "76w0hz7015kkr9kjkav",
        images: "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
        title: "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
        rating: 2.89,
        price: 15999,
        category: "laptops",
        brand: "acer"
    },
    {
        id: "qeagrlm9lrkr9kjkav",
        images:"https://content1.rozetka.com.ua/goods/images/big_tile/178060622.jpg",
        title: "Ноутбук Acer Aspire 7 A715-41G-R9KP (NH.Q8QEU.00L) Charcoal Black",
        rating: 1.96,
        price: 21500,
        category: "laptops",
        brand: "acer"
    },
    {
        id: "0y9ksratv6akr9kjkav",
        images: "https://content2.rozetka.com.ua/goods/images/big_tile/178060660.jpg",
        title: "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
        rating: 2.42,
        price: 22999,
        category: "laptops",
        brand: "acer"
    },
    {
        id: "cvr29caokhhkr9kjkav",
        images: "https://content1.rozetka.com.ua/goods/images/big_tile/25101152.jpg",
        title: "Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!",
        rating: 0.53,
        price: 28999,
        category: "laptops",
        brand: "acer"
    },
    {
        id: "k9hb29sfeekr9kjkav",
        images:"https://content1.rozetka.com.ua/goods/images/big_tile/24790127.jpg",
        title: "Ноутбук Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black",
        rating: 3.2,
        price: 22500,
        category: "laptops",
        brand: "acer"
    },
    {
        id: "4g0lv7ii7ytkr9kjkav",
        images: "https://content.rozetka.com.ua/goods/images/big_tile/30872664.jpg",
        title: "Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGND3) Gold",
        rating: 1.57,
        price: 33999,
        category: "laptops",
        brand: "apple"
    },
    {
        id: "f4zo7g5nb4okr9kjkav",
        images:"https://content1.rozetka.com.ua/goods/images/big_tile/119503415.jpg",
        title: "Ноутбук Apple MacBook Pro 16\" 512GB 2019 (MVVL2) Silver",
        rating: 1.57,
        price: 81000,
        category: "laptops",
        brand: "apple"
    },
    {
        id: "g9amcjezcmkr9kjkav",
        images: "https://content.rozetka.com.ua/goods/images/big_tile/24373314.jpg",
        title: "Ноутбук Apple MacBook Pro 13\" A2251 Retina 1TB 2020 (MWP82) Silver",
        rating: 1.89,
        price: 70999,
        category: "laptops",
        brand: "apple"
    },
    {
        id: "b6rae36v8vvkr9kjkav",
        images: "https://content1.rozetka.com.ua/goods/images/big_tile/169147176.jpg",
        title: "Ноутбук Apple MacBook Pro 13\" M1 512GB 2020 (Z11C000Z3) Custom Space Gray",
        rating: 0.92,
        price: 51999,
        category: "laptops",
        brand: "apple"
    }
]

function Card() {
    const [product, setProduct] = useState(CARD_DATA);
    return (
        <div class="catalog">
            {product.map(item => 
                <div className="product-card" key={item.id}>
                    <div className="image">
                        <img className="image__goods" src={item.images} alt=""/>
                    </div>

                    <div className="rating-price">
                        <div className="rating">
                            {item.rating}
                            <img className="rating__image-star" src={Star} alt=""/>
                        </div>
                    
                        <p className="price">{item.price}</p>
                    </div>
                                    
                    <p className="product-card__name">{item.category} {item.brand}</p>
                    <p className="product-card__information">{item.title}</p>

                    <div className="product-card-buttons">
                        <button className="product-card-buttons__wishlist">
                        <img className="product-card-buttons__image-heart" src={Heart} alt=""/>
                        <span className="product-card-buttons__name">WISHLIST</span>
                        </button><button className="product-card-buttons__add">
                        <img className="product-card-buttons__image-basket" src={Basket} alt=""/>
                        <span className="product-card-buttons__name">ADD TO CART</span>
                        </button>
                    </div> 
                </div>
            )}
        </div>
    )
}

export default Card;
