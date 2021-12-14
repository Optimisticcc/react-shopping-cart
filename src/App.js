import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import { connect } from "react-redux";
function App({ currentItem }) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          {!currentItem ? (
            <Route path="*" element={<Navigate to="/" />} />
          ) : (
            <Route exact path="/product/:id" element={<SingleItem />} />
          )}
        </Routes>
      </div>
      ;
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
