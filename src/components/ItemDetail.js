const ItemDetail = ({title, price, image, description}) => {
    return(
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default ItemDetail