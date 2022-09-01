import cartLogo from './cart.svg';

const CartWidget = () => {
    return (
        <div className="cartBox">
            <img src={cartLogo} className="cartLogo" alt={cartLogo}/>
        </div>
    )
}

export default CartWidget;