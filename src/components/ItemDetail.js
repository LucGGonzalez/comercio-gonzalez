import ItemCount from './ItemCount';

const ItemDetail = ({title, price, image, description, id}) => {
    return(
        
        <div>
            <h1>detalle {id}</h1>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h4>{description}</h4>
            <ItemCount stock={10}/>
        </div>
    )
}

export default ItemDetail