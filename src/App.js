import "./App.css";
import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import { Route, Switch } from "react-router";
import Header from "./components/header/header.component";
import { auth } from './firebase/firebase.utils'
import SignInAndOut from "./pages/sign-in-and-out/sign-in-and-out.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})

      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
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
}

export default App;
