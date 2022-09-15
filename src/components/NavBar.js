import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="navBarBox">
            
            <a href="#home">Productos</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>

            <button id="botonCarrito"> <span id="contadorCarrito">0</span></button>

            <CartWidget/>
        </div>
    )
}

export default NavBar;