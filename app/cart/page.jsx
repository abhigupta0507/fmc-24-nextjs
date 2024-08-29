'use client'
import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import bg from '../dashboard/bg.png';

// Alert Component
const Alert = ({ children }) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
    {children}
  </div>
);

const AlertDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);

// CartItem Card Component
const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex items-center justify-between p-4 border-b border-red-800">
    <div className="flex items-center space-x-4">
      <img src={`/api/placeholder/${item.image}`} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div>
        <h3 className="font-semibold text-white">{item.name}</h3>
        <p className="text-sm text-red-400">₹{item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-red-800 hover:bg-red-700 text-white">
        <Minus size={16} />
      </button>
      <span className="w-8 text-center text-white">{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-red-800 hover:bg-red-700 text-white">
        <Plus size={16} />
      </button>
      <button onClick={() => removeItem(item.id)} className="p-1 rounded-full bg-red-600 hover:bg-red-500 text-white">
        <Trash2 size={16} />
      </button>
    </div>
  </div>
);

// Main Component
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "College Fest T-Shirt", price: 15.99, quantity: 2, image: "200/200" },
    { id: 2, name: "Event Pass", price: 25.00, quantity: 1, image: "200/200" },
    { id: 3, name: "Food Coupon Book", price: 10.00, quantity: 3, image: "200/200" },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      ></div>
    <div className="max-w-2xl mx-auto p-4 text-white z-20">
        
      <h1 className="text-3xl font-bold mb-6 text-red-500">Your Cart</h1>
      {cartItems.length === 0 ? (
        <Alert>
          <AlertDescription>
            Your cart is empty. Add some items!
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <div className="bg-black rounded-lg shadow-md">
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="mt-6 bg-black p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-xl text-red-500">₹{total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div></>
  );
};

export default Cart;