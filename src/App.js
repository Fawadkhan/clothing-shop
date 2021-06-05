import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import { Route } from "react-router";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
    <Header />
      <switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </switch>
    </div>
  );
}

export default App;
