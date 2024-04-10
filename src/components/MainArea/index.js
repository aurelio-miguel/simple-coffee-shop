import './MainArea.css';
import TitlePage from '../TitlePage';
import CaptionPage from '../CaptionPage';
import CoffeeCard from '../CoffeeCard';
import { useState } from 'react';

const MainArea = () => {

    const [allProducts, setAllProducts] = useState(true);
    const [availableNow, setAvailableNow] = useState(false);

    const jsonCoffee = [
        {
            "name": "Cappucino",
            "tag": "Popular",
            "image": "/cappuccino.png",
            "price": 5.20,
            "score": 4.7,
            "qtdVotes": 65,
            "available": true
        },
        {
            "name": "House Coffee",
            "tag": "Popular",
            "image": "/house_coffee.png",
            "price": 3.50,
            "score": 4.3,
            "qtdVotes": 13,
            "available": true
        },
        {
            "name": "Espresso",
            "tag": null,
            "image": "/espresso.png",
            "price": 4.30,
            "score": 4.9,
            "qtdVotes": 55,
            "available": true
        },
        {
            "name": "Coffee Latte",
            "tag": null,
            "image": "/coffee_latte.png",
            "price": 3.50,
            "score": 5.0,
            "qtdVotes": 23,
            "available": true
        },
        {
            "name": "Chocolate Coffee",
            "tag": null,
            "image": "/chocolate_coffee.png",
            "price": 3.50,
            "score": 4.5,
            "qtdVotes": 123,
            "available": false
        },
        {
            "name": "Valentine Special",
            "tag": null,
            "image": "/valentine_special.png",
            "price": 6.50,
            "score": 0,
            "qtdVotes": 0,
            "available": true
        }
    ];

    const [products, setProducts] = useState(jsonCoffee);



    const clickAllProducts = () => {
        if (!allProducts) {
            setAllProducts(true);
            setAvailableNow(false);
            setProducts(jsonCoffee);
        }
    }

    const clickAvailableNow = () => {
        if (!availableNow) {
            setAvailableNow(true);
            setAllProducts(false);
            const itensAvailable = jsonCoffee.filter(item => item.available);
            setProducts(itensAvailable);
        }
    }

    return (
        <div className="main-area">
            <header className="header">
                <TitlePage title="Our Collection" />
                <CaptionPage caption="Introducing our Coffee Collection, a selection of unique coffees from different roast types ant origins, expertly roasted in small batches and shipped fresh weekly." />

                <div className="header-menu">
                    <a className={allProducts ? "button-active" : "button"} onClick={clickAllProducts}>All Products</a>
                    <a className={availableNow ? "button-active" : "button"} onClick={clickAvailableNow}>Available now</a>
                </div >
            </header>
            <main className="main-cards">
                {products.map((item) => <CoffeeCard key={item.name} tag={item.tag} name={item.name} image={item.image} price={item.price} score={item.score} qtdVotes={item.qtdVotes} available={item.available} />)};
            </main>
        </div>
    );
};

export default MainArea;