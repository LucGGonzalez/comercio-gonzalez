import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="navBarBox">
            <CartWidget/>

            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>

            <button id="botonCarrito"> <span id="contadorCarrito">0</span></button>
        </div>
    )
}

export default NavBar;