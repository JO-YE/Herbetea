import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from './pages/product';
import ProductDetails from "./pages/productdetails";
import Checkout from './pages/checkout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} /> {/* Dynamic route for product details */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
