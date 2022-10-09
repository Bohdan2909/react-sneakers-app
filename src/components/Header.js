import {Link} from "react-router-dom";

function Header ({onCartOpen}) {
    return (
        <header className="d-flex justify-between align-center p-40">

               <Link to="/">
                   <div className="d-flex align-center">
                   <img width={40} height={40} alt="logo" src="/img/logo.png"/>
                   <div>
                       <h3 className="text-uppercase">React Sneakers</h3>
                       <p>Магазин кращих товарів</p>
                   </div>
                    </div>
               </Link>

            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={onCartOpen}>
                    <img width={18} height={18} alt="cart" src="/img/cart.svg"/>
                    <span>1200 грн.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} alt="heart" src="/img/sneakers/heart.svg"/>
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} alt="union" src="/img/union.svg"/>
                </li>

            </ul>
        </header>

    )
}

export default Header;