
## Tech Stack

**Client:** React, TypeScript, and React-Router-DOM

## Instalation:
```bash
  npx create-react-app
```

## Utilization

This project is a fictional e-commerce store that sells coffee.

## Features
- Shopping cart feature in which the user is able to add and delete its chosen coffee types.
- Form validation.
- When a coffee is put on the cart, an icon pops up on the navbar cart button indicating that an item was added to the cart.
- When the user submits the payment form, he is redirected to the delivery page, where it is displayed the information that he had previously put in the form.

## File Structure

### 1. src/pages/hero
- Hero section of the webpage.
 
### 2. src/pages/shop/shop
- Inside this folder we can find the section of the website that loops through our API located in the front-end. As it is being looped, we are passing as props the coffee API to the "Product" component. 

### 3. src/pages/shop/product
- The component that is being looped by the "Shop" component. Here, the information displayed is being received as props through its parent. Inside this file the user is able to add or remove items from his cart.

### 4. src/pages/cart/cart
- This section is conditionally rendered in such a way that if the user has not selected any items to his cart, it will show a message "Your cart is empty". Otherwise, the items chosen by the user will be looped and the state will be passed as props to the "CartProduct" component. As a result, the items selected by the user will be displayed in this section of the website.

### 5. src/pages/cart/cart-content
- The component that is being looped by the "Cart" component. Here, the information displayed is being received as props through its parent. Inside this file the user is able to add or remove items from his cart.

### 6. src/pages/cart/payment
- Contains the form component which includes form validation.

### 7. src/pages/cart/checkout
- The page that the user is redirected to after he submits the form

### 8. src/components
- Stores components that are shared between all of the application, in this case it is just the navbar

### 9. src/hooks
- Where it is located the functions and state variables that are shared throughout the application. 


 ## React Hooks:
 - useContext
 - createContext
- useLocation
- useState
- useEffect

## Dependencies:
- axios
- react-router-dom
- react-scroll
- react-hook-form
