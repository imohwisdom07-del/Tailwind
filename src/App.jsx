import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  // The 'cartItems' state lives here so both pages can access it
  const [cartItems, setCartItems] = useState([]);

  // 1. ADD TO CART LOGIC
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const isItemInCart = prevItems.find((item) => item.id === product.id);

      if (isItemInCart) {
        // If it exists, increase the quantity
        return prevItems.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      // If it's a new item, add it to the array with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // 2. REMOVE FROM CART LOGIC
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // 3. UPDATE QUANTITY LOGIC (Optional but useful for detail page)
  const updateQuantity = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      ).filter(item => item.quantity > 0) // Remove item if quantity hits 0
    );
  };

  return (
    <Router>
      {/* We wrap everything in a div with a consistent background */}
      <div className="min-h-screen bg-stone-100 font-sans">
        <Routes>
          {/* Main Home Page */}
          <Route 
            path="/" 
            element={
              <Home 
                cartItems={cartItems} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
              />
            } 
          />

          {/* Product Detail Page (useParams requirement) */}
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                cartItems={cartItems} 
                addToCart={addToCart} 
                updateQuantity={updateQuantity}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;