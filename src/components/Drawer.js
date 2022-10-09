function Drawer({onClose, items = [], onRemoveCart}) {
    return (
        <div  className="overlay">
        <div className="drawer">
            <h2 className='mb-30 d-flex justify-between'>Корзина
                <img className='removeBtn cu-p' onClick={onClose} src="/img/sneakers/btn-remove.svg" alt="remove"/>
            </h2>
            <div className="items">
                {
                    items.map((obj, id) => (
                    <div key ={id} className="cartItem d-flex align-center justify-between mb-20">
                   <div className="cartItemImg" style={{backgroundImage:`url(${obj.imageUrl})`}}></div>
                    <div className='mr-20'>
                    <p className='mb-5'>{obj.name}</p>
                    <b>{obj.price}</b>
                    </div>
                    <img onClick={() => onRemoveCart(obj.id)} className='removeBtn' src="/img/sneakers/btn-remove.svg" alt="remove"/>
                    </div>
                    ))
                }


            </div>

            <div className='cartTotalBlock'>
                <ul>
                    <li className='d-flex'>
                        <span>Всього:</span>
                        <div></div>
                        <b>23000 грн.</b>
                    </li>
                    <li className='d-flex'>
                        <span>Податок 5%:</span>
                        <div></div>
                        <b>1300 грн.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформити заказ <img src="/img/sneakers/arrow.svg" alt="Arrow"/></button>
            </div>
        </div>
        </div>
    )
}


    export default Drawer;