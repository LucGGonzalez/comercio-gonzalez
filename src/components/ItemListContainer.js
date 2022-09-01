import React, {useState} from 'react'

const ItemListContainer = (props) => {
    
    
    const [items, setItems] = useState (0)

    const sumar = () => items <= props.stock -1 ? setItems(items + 1) : alert('Se alcanzó el máximo')
    const restar = () => items > 0 ? setItems(items - 1) : alert('No se pueden introducir valores negativos')
    
    return(
        <>
        <h3>Bienvenido!</h3>
        <div>Tenes {items} articulos.</div>
        <div>Stock total {props.stock}</div>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        </>
    )
}

export default ItemListContainer;