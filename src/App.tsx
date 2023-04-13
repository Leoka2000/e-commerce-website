import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Hero from './pages/hero/hero'
// import { Shop } from './pages/shop/shop';
// import { CartLooper } from './pages/cart/cart-looper';
 import { ShopContextProvider } from './hooks/shop-context';
// import Success from './pages/checkout/success';
import Navbar from './components/navbar/navbar';
import Home from './pages/main/home';
import { Cart } from './pages/cart/cart/cart'
import Success from './pages/cart/checkout/success';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/success' element={<Success/>} />
            </Routes>
          </Router>
        
      </ShopContextProvider>
    </div>
  );
}

export default App;
