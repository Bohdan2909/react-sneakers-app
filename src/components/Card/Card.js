import style from './Card.module.scss';

function Card (props) {
    return (


         <div className={style.card}>
             <div className={style.favorite}>
                 <img src="/img/sneakers/heart-unliked.svg" alt="Unliked"/>
             </div>
             <img width={133} height={112} src={props.img} alt="Sneakers"/>
             <h5>{props.name}</h5>
             <div className="d-flex justify-between align-center">
                 <div className="d-flex flex-column">
                     <span>Ціна:</span>
                     <b>{props.price}</b>
                 </div>
                 <button className="button">
                     <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                 </button>
             </div>
         </div>


    )
}
export default Card;