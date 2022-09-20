import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const ItemDetail = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const [count, setCount] = useState(1);

    function onAdd(product) {
        addToCart(product, count);
    }
    return (
        <div>
            <Link to="/">Volver</Link>
            <img src={product.image} alt={product.title}></img>
            <h2>{product.title}</h2>
            <div>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <ItemCount stock={10} count={count} setCount={setCount}></ItemCount>
                <div>
                    <button onClick={() => onAdd(product)}>Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail

// const ItemDetail = () => {
//     const {addToCart} = useContext(CartContext);
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         console.log(count);
//     };
//     return (
//         <div>
//             <h1>Detalle de producto</h1>
//             <h2>Precio: 100</h2>
//             <ItemCount setCount={setCount} count={count} />
//             <Link to={'/cart'} onClick={handleClick}>
//                 Ir a pagar.
//             </Link>
//         </div>
//     );
// };

// export default ItemDetail