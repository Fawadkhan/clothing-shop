import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router";

const Hats = () => <div>HATSSSS ON</div>;

function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </switch>
    </div>
  );
}

export default App;
