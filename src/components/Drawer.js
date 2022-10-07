function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
            <h2 className='mb-30 d-flex justify-between'>Корзина<img className='removeBtn cu-p' src="/img/sneakers/btn-remove.svg" alt="remove"/></h2>
            <div className="items">
                <div className="cartItem d-flex align-center justify-between mb-20">
                    <div
                        style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                        className="cartItemImg"></div>
                    <div className='mr-20'>
                        <p className='mb-5 flex'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>3500 грн.</b>
                    </div>
                    <img className='removeBtn' src="/img/sneakers/btn-remove.svg" alt="remove"/>
                </div>
                <div className="cartItem d-flex align-center justify-between mb-20">
                    <img className='mr-20' width={70} height={70} src="/img/sneakers/10.jpg" alt="Sneakers"/>
                    <div className='mr-20'>
                        <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                        <b>8500 грн.</b>
                    </div>
                    <img className='removeBtn' src="/img/sneakers/btn-remove.svg" alt="remove"/>
                </div>
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