import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBarBox">
            
            <ul className="lista">
                <li><NavLink to= {'/'}>Productos</NavLink></li>
                <li><NavLink to= {'/category/'}>Category</NavLink></li>
            </ul>

            <button id="botonCarrito"> <span id="contadorCarrito">0</span></button>

            <CartWidget/>
        </div>
    )
}

export default NavBar;