import {Link} from 'react-router-dom'

const Item = ({title, price, image, id}) => {
    return(
        <div>
            <Link to= '/detail/'>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <button>detalle</button>
            </Link>
        </div>
    )
}

export default Item