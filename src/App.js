import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch} from "react-router";
import Header from "./components/header/header.component";
import SignInAndOut from "./pages/sign-in-and-out/sign-in-and-out.component";

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInAndOut} />
      </Switch>
    </div>
  );
}

export default App;
