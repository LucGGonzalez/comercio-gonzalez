import React, {useState} from 'react'

const ItemCount = ({stock, count, setCount}) => {

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restar = () => {
        if (count > stock) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={sumar}>+</button>
                <p>{count}</p>
                <button onClick={restar}>-</button>
            </div>
        </div>
    );
};

export default ItemCount

// const ItemCount = (props) => {
    
    
//     const [items, setItems] = useState (0)

//     const sumar = () => items <= props.stock -1 ? setItems(items + 1) : alert('Se alcanzó el máximo')
//     const restar = () => items > 0 ? setItems(items - 1) : alert('No se pueden introducir valores negativos')
    
//     return(
//         <>
//         <h3>Bienvenido!</h3>
//         <div>Tenes {items} articulos.</div>
//         <div>Stock total {props.stock}</div>
//         <button onClick={sumar}>sumar</button>
//         <button onClick={restar}>restar</button>
//         </>
//     )
// }

// export default ItemCount;