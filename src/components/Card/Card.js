import style from './Card.module.scss';
import React from "react";

function Card ({name, imageUrl, price, onPlus, onFavorite, hasFavorite, id, added = false}) {
    const [isAdd, setIsAdd] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(hasFavorite);

    const onClickPlus = () => {
        onPlus({name, price, imageUrl,id})
        setIsAdd(!isAdd);
    }
    const onClickFavorite = () => {
        onFavorite({name, price, imageUrl, id})
        setIsFavorite(!isFavorite)
    }
    return (


         <div className={style.card} >
             <div className={style.favorite} onClick={onFavorite}>
                 <img onClick={onClickFavorite} src={isFavorite ? "/img/sneakers/heart-liked.svg" :  "/img/sneakers/heart-unliked.svg" } alt="Unliked"/>
             </div>
             <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
             <h5>{name}</h5>
             <div className="d-flex justify-between align-center">
                 <div className="d-flex flex-column">
                     <span>Ціна:</span>
                     <b>{price}</b>
                 </div>

                     <img className={style.plus}
                          onClick={onClickPlus}
                          src={isAdd ? "/img/sneakers/btn-cheked.svg":"/img/sneakers/btn-plus.svg" } alt="plus"/>

             </div>
         </div>


    )
}
export default Card;