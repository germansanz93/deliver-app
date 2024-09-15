import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item, qty) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + qty }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: qty }]);
    }
  };

  const removeFromCart = (item, qty) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity <= qty) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - qty }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  useEffect(() => {
    const data = localStorage.getItem('cartItems');
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); // Include cartItems as a dependency here

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};