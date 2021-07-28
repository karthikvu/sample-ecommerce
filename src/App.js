import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Gallery from './components/Gallery';

function App() {
  const [cartdata, setCartdata] = useState([])

  const addItemToCart = (item) => {
    console.log("Add Item: ", item)
    setCartdata([ ...cartdata, item ])
  }

  return (
    <div className="App">
      <Gallery addItemToCart={addItemToCart}/>
      <Cart cartData={cartdata}/>
    </div>
  );
}

export default App;
