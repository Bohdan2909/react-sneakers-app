import Card from "../components/Card/Card";
import React from "react";

function Home ({items,searchValue,onAddCart,onAddToFavorite,onChangeInput, cartItems})  {

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Всі кросовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/sneakers/search.svg" alt="Search"/>
                    <input value={searchValue} onChange={onChangeInput} placeholder="Пошук..." type="text"/>
                </div>
            </div>
            <div className="d-flex justify-between flex-wrap">

                {
                    items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, id) => <Card
                            key={id}
                            id={item.id}
                            name ={item.name}
                            price ={item.price}
                            imageUrl ={item.imageUrl}
                            onFavorite={(item) => onAddToFavorite(item)}
                            onPlus={(item) => onAddCart(item)}
                            added = {cartItems.some(obj => obj.id === item.id)}
                            hasFavorite={false}
                        />)
                }
            </div>
        </div>
    )
}
export default Home;