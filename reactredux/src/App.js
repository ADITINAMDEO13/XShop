import "./App.css";
import Header from "./container/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div className="App" style={{ paddingTop: "50px" }}>
      <Router>
        <Header />

        <Route path="/" exact component={ProductListing} />
        <Route path="/product/productId" exact component={ProductDetail} />
        <Route>404 Not Found</Route>
      </Router>
    </div>
  );
}

export default App;
