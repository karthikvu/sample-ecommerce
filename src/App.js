import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Cart from './components/Cart';
import Gallery from './components/Gallery';


function App() {
  const [cartdata, setCartdata] = useState([])
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    //CALL API
    console.log("Making api call");
    axios.get("http://localhost:3002/products").then(response => {
      console.log(response)
      setProductList(response.data);
    }).catch(err => {
      console.error(err);
    })
  }, [])

  const addItemToCart = (item) => {
    console.log("Add Item: ", item)
    setCartdata([ ...cartdata, item ])
  }

  return (
    <div className="App">
      <Gallery productList={productList} addItemToCart={addItemToCart}/>
      <Cart cartData={cartdata}/>
    </div>
  );
}

export default App;
