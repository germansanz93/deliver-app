import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { Product } from "@/dtos/Product";
import Decimal from 'decimal.js';


type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product, quantity: Decimal) => void;
  removeFromCart: (product: Product, quantity: Decimal) => void;
  clearCart: () => void;
  getCartTotal: () => Decimal;
  getCartQuantity: () => Decimal;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>(
    localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : []
  );
  const addToCart = (item:Product, qty: Decimal) => {
    const isItemInCart = cartItems.find((cartItem: Product) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem: Product) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity.add(qty) }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: qty }]);
    }
  };

  const removeFromCart = (item: Product, qty: Decimal) => {
    const isItemInCart = cartItems.find((cartItem: Product) => cartItem.id === item.id);
    console.log('isItemInCart', isItemInCart);
    if (isItemInCart) {
      if (isItemInCart.quantity <= qty) {
        console.log('removing item');
        setCartItems(cartItems.filter((cartItem: Product) => cartItem.id !== item.id));
      } else {
        console.log('subtracting item', qty);
        setCartItems(
          cartItems.map((cartItem: Product) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity.sub(qty) }
              : cartItem
          )
        );
      }
    } else {
      console.error('Item not found in cart');
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total: Decimal, item: Product) => total.plus(item.price.times(item.quantity)), new Decimal(0));
  };

  const getCartQuantity = () => {
    return cartItems.reduce((total: Decimal, item: Product) => total.plus(item.quantity), new Decimal(0));
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