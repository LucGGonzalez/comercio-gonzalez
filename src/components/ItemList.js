import Item from "./Item"

const ItemList = ({lista}) => {
    return(
        <div>
            {
                lista && lista.map((product) => (
                    <Item title={product.title} price={product.price} image={product.image} />
                ))
            }
        </div>
    )
}

export default ItemList