import Card from "./Card"
import "./gallery.css"

import laptop from "../images/laptop.jpeg"
import mobile from "../images/mobile.jpeg"
import shoes from "../images/shoes.jpeg"
import spects from "../images/spects.jpeg"

const productList = [
    {
        name: 'Apple MacBook Pro',
        price: 120000,
        image: laptop,
    },{
        name: 'Samsung Mobile',
        price: 80000,
        image: mobile,
    },{
        name: 'SparX Shoes',
        price: 1250,
        image: shoes,
    },{
        name: 'Ray Ban UV Block Ultra Dark Sunglasses',
        price: 4500,
        image: spects,
    }
]

const Gallery = props => {
    return <div className="gallery-container">
        {productList.map(product => {
            return <Card
                name={product.name}
                price={product.price}
                image={product.image}
                addItemToCart={props.addItemToCart}
            />
        })}
    </div>
}

export default Gallery;