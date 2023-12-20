import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import Product from './Product';
import CartItem from './CartItem';
import './App.css';



const productData = [
  {
    "id": 1,
    "title": "iPhone 13 pro",
    "description": "An apple mobile which is nothing like apple",
    "price": 30000,
    "discountPercentage": 17.96,
    "rating": 6.69,
    "stock": 10,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://tellstar.ir/wp-content/uploads/2021/09/Apple_iPhone-13-Pro.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
},
{
    "id": 2,
    "title": "iPhone x",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 20000,
    "discountPercentage": 15.94,
    "rating": 5.44,
    "stock": 20,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
},
{
    "id": 3,
    "title": "vivo v23",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 2000,
    "discountPercentage": 13.46,
    "rating": 3.09,
    "stock": 20,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.ytimg.com/vi/GVzKE4-Sijk/maxresdefault.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
},
{
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 999,
    "discountPercentage": 15.21,
    "rating": 3.3,
    "stock": 50,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
},
{
    "id": 5,
    "title": "samsang",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 799,
    "discountPercentage": 7.38,
    "rating": 3.09,
    "stock": 10,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://theawesomer.com/photos/2009/06/060209_pixon_1.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
}
];

const HomePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="product-container">
        {productData.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="cart-summary">
          <p>Total Quantity: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
          <p>Total Amount: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
