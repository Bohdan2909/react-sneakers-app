function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} alt="logo" src="/img/logo.png"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p>Магазин кращих товарів</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} alt="cart" src="/img/cart.svg"/>
                    <span>1200 грн.</span>
                </li>
                <li>
                    <img width={18} height={18} alt="union" src="/img/union.svg"/>
                </li>
            </ul>
        </header>

    )
}

export default Header;