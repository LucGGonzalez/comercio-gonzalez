import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log(count);
    };
    return (
        <div>
            <h1>Detalle de producto</h1>
            <h2>Precio: 100</h2>
            <ItemCount setCount={setCount} count={count} />
            <Link to={'/cart'} onClick={handleClick}>
                Ir a pagar.
            </Link>
        </div>
    );
};

export default ItemDetail