import Item from "./Item"

const ItemList = ({list}) => {
    return (
        <div>
            {list.map((product) => (
                <Item key={product.id} item={product} />
            ))}
        </div>
    )
}

export default ItemList