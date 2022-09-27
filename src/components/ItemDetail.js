import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Item from './Item';

const ItemDetail = ({ item }) => {
    const {addToCart} = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [selectCount, setSelectCount] = useState (false);

    const handleClickComprar = () => {
        if (count > 0) {
            setSelectCount (true)
            addToCart({
                id: item.id,
                name: item.name,
                img: item.img,
                count,
                price: item.price,
                stock: item.stock,
            })
        }
    }

    return (
    <div
        display="flex"
        justifyContent="center"
        margin="auto"
        flexWrap="wrap"
    >
        <div flexDirection="colum" marginTop="60px">
            <h2>{item.name}</h2>
            <img src={item.img} alt="img" width="350" />
        </div>
        <div paddingTop={10} margin={5}>
            <div style={{ fontWeight: 'bold' }}>{item.description}</div>
            <p>price: $ {Intl.NumberFormat().format(item.price)}</p>
            <p>Available stock: {item.stock}</p>

            <ItemCount
                setCount={setCount}
                count={count}
                min={1}
                stock={item.stock}
            />

            {selectCount ? (
                <>
                    <div>
                        <Link to="/cart">
                            <button>
                                Finish buying
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <button>
                                Continue buying
                            </button>
                        </Link>
                    </div>
                </>
            ) : (
                <button onClick={handleClickComprar}
                    disabled={item.stock === 0} >Add to cart
                </button>
            )}
        </div>
    </div>
)
}
        
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