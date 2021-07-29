import "./card.css"
import laptop from "../images/laptop.jpeg"
import PriceDisplay from "./PriceDisplay";

const Card = props => {
    const { id, name, price, image } = props;

    const addToCartClick = () => {
        console.log(name, price)
        props.addItemToCart({
            id,
            name,
            price,
            image
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
            <div className="prod-price">
                <PriceDisplay price={price} />
            </div>
        </div>
        <div className="card-actions">
            <button className="blue" onClick={addToCartClick}>Add to cart</button>
        </div>
    </div>
}

export default Card;