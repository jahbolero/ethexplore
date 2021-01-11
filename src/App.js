import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import VerifyAddress from './components/address/VerifyAddress';
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/VerifyAddress" component={VerifyAddress}></Route>
      </Switch>
    </div>
  );
}

export default App;
