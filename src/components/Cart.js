import "./cart.css"
import PriceDisplay from "./PriceDisplay"

const combine = arr => {
    return arr.reduce((acc, curr) => {
        console.log(curr)
        if (!acc[curr.id]) {
            acc[curr.id] = []
        }
        acc[curr.id].push(curr)
        return acc
    }, {})

}

const Cart = props => {
    const { cartData = [] } = props

    let sum = cartData.reduce((a, c) => a + c.price, 0)

    let unique = combine(cartData)
    
    return <div className="cart-container">
        <div className="cart-heading">My Cart ({ cartData.length })</div>

        <div className="items-container">
            {Object.values(unique).map(items => {
               let cartItem = items[0]
               return  <div className="item">
                   <div className="item-name">
                       <div className="item-name">{cartItem.name} X {items.length} </div>
                       <div className="rate">Price: <PriceDisplay price={cartItem.price} /></div>
                    </div>
                   <div className="item-price">Rs. <PriceDisplay price={cartItem.price * items.length} /></div>
           </div>
           })}
        </div>

        <div className="total">
            <div className="total-price">
            <PriceDisplay price={sum} />
            </div>
        </div>
       {sum > 0 ? <div className="cart-actions">
            <button className="yellow large">
                Proceed to payment
            </button>
        </div> : null}
    </div>
}


export default Cart;