import { createContext, useEffect, useState, ReactNode } from "react";
import { PRODUCTS, Product } from "../components/prod-database/prod-database";

export type ContextProps = {
  cartItems: number[];
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void; 
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
};

export const ShopContext = createContext<ContextProps>(
  {} as ContextProps
); 

const getDefaultCart = (): number[] => {
  const storedCart = localStorage.getItem('cart'); // using browser storage so that whem we refresh the page, the browser does not reset all values
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    const cart: number[] = [];
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  }
};


export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<number[]>(getDefaultCart());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  
  const getTotalCartAmount = (): number => { 
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: Product = PRODUCTS.find(
          (product: Product) => product.id === Number(item)
        )!;
       
        totalAmount += cartItems[item] * +itemInfo.price; 
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount })); 
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ContextProps = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
