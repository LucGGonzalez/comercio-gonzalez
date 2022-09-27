import {Link} from 'react-router-dom'

const Item = ({item: {id, name, description, price, img} }) => (
    <div>
        <h2>{name}</h2>
        <span>{price}</span>
        <Link to={`/item/${id}`}>
            <img src={img} alt="img"></img>
        </Link>
    </div>
)

export default Item