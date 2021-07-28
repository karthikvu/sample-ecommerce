import "./cart.css"

const Cart = props => {
    const { cartData = [] } = props
    
    // ------ above line is same as below
    // let cartData = []
    
    // if (props.cartData) {
    //     cartData = props.cartData
    // }


    // const cartData = [
    //     {
    //         name: "Apple MacBook Pro",
    //         price: 120000
    //     },
    //     {
    //         name: "SparX Shoes",
    //         price: 1250
    //     },  {
    //         name: "Apple MacBook Pro",
    //         price: 120000
    //     },
    //     {
    //         name: "SparX Shoes",
    //         price: 1250
    //     },
    // ]

    let sum = 0
    cartData.forEach(item => {
        sum = item.price + sum
    })

    return <div className="cart-container">
        <div className="cart-heading">My Cart ({ cartData.length })</div>

        <div className="items-container">
           {cartData.map(cartItem => {
               return  <div className="item">
                   <div className="item-name">{ cartItem.name }</div>
                   <div className="item-price">Rs. {cartItem.price}</div>
           </div>
           })}
        </div>

        <div className="total">
            <div className="total-price">
                Rs. { sum}
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