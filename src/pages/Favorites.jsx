import Card from "../components/Card/Card";
import React from "react";

function Favorites ({items, onAddToFavorite})  {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>My favorites</h1>
            </div>
            <div className="d-flex justify-between flex-wrap">
                {
                    items.map((item, id) => <Card
                            key={id}
                            name ={item.name}
                            price ={item.price}
                            imageUrl ={item.imageUrl}
                            hasFavorite={true}
                            onFavorite={onAddToFavorite}
                        />)
                }
            </div>
        </div>
    )
}
export default Favorites;