import "./card.css"
import laptop from "../images/laptop.jpeg"

const Card = props => {
    const { name, price, image } = props;

    const addToCartClick = () => {
        console.log(name, price)
        props.addItemToCart({
            name,
            price
        })
    }
    
    return <div className="card-container">
        <div className="card-media">
            <img src={image}></img>
        </div>
        <div className="card-meta">
            <div className="prod-name">
                {name}
            </div>
            <div className="prod-price">Rs. {price}</div>
        </div>
        <div className="card-actions">
            <button className="blue" onClick={addToCartClick}>Add to cart</button>
        </div>
    </div>
}

export default Card;